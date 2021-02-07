import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { TargetTyep } from '../../utils/constant';

export interface KbtiState {
  questionIndex: number;
  score: {
    D: number;
    C: number;
    I: number;
    E: number;
    J: number;
    P: number;
  };
}

const KbtiStateContext = createContext<KbtiState>(undefined);

type Action =
  | {
      type: 'ADD_SCORE';
      target: TargetTyep;
      score: number;
    }
  | {
      type: 'NEXT_PAGE';
    }
  | {
      type: 'RESET';
    };

type KbtiDispatch = Dispatch<Action>;

const KbtiDispatchContext = createContext<KbtiDispatch>(undefined);

function kbtiReducer(state: KbtiState, action: Action): KbtiState {
  switch (action.type) {
    case 'ADD_SCORE': {
      const { target, score } = action;
      if (target === 'JP') {
        return {
          ...state,
          score: {
            ...state.score,
            J: state.score.J + 1,
            P: state.score.P + 1,
          },
        };
      }
      const nextScore = {
        ...state.score,
        [target]: state.score[action.target] + score,
      };
      return {
        ...state,
        score: nextScore,
      };
    }
    case 'NEXT_PAGE': {
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
      };
    }
    case 'RESET': {
      return {
        questionIndex: 0,
        score: {
          D: 0,
          C: 0,
          I: 0,
          E: 0,
          J: 0,
          P: 0,
        },
      };
    }
    default:
      throw new Error('unhandle Err');
  }
}

export function KbtiContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [kbti, dispatch] = useReducer(kbtiReducer, {
    questionIndex: 0,
    score: {
      D: 0,
      C: 0,
      I: 0,
      E: 0,
      J: 0,
      P: 0,
    },
  });
  return (
    <KbtiDispatchContext.Provider value={dispatch}>
      <KbtiStateContext.Provider value={kbti}>
        {children}
      </KbtiStateContext.Provider>
    </KbtiDispatchContext.Provider>
  );
}

export function useKbtiState() {
  const state = useContext(KbtiStateContext);
  if (!state) throw new Error('KBTIStateContext not found');
  return state;
}
export function useKbtiDispatch() {
  const dispatch = useContext(KbtiDispatchContext);
  if (!dispatch) throw new Error('KBTIDispatch no found');
  return dispatch;
}
