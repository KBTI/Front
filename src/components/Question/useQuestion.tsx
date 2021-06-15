import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AnswerItemTypes,
  QuestionItemTypes,
  QUESTION_LIST,
} from '../../utils/constant';
import { useKbtiDispatch, useKbtiState } from '../context';

interface useQuestionReturnType {
  questionIndex: number;
  handleButtonClick: () => void;
}

export default function useQuestion(): useQuestionReturnType {
  const kbti = useKbtiState();
  const dispatch = useKbtiDispatch();
  const history = useHistory();

  const { questionIndex } = kbti;

  useEffect(() => {
    if (questionIndex === 0) {
      history.push('/');
    }
  }, [history, questionIndex]);

  useEffect(() => {
    if (questionIndex === QUESTION_LIST.length) {
      const { D, C, I, E, J, P } = kbti.score;
      const resultUrl =
        D > C
          ? `/result/D${I > E ? 'I' : 'E'}${J > P ? 'J' : 'P'}`
          : `/result/C${I > E ? 'I' : 'E'}`;
      history.push(resultUrl);
    }
  }, [history, kbti.score, questionIndex]);

  const handleButtonClick = (item: AnswerItemTypes) => {
    dispatch({
      type: 'ADD_SCORE',
      target: item.target,
      score: item.score,
    });

    dispatch({
      type: 'NEXT_PAGE',
    });
  };
  return {
    questionIndex,
    handleButtonClick,
  };
}
