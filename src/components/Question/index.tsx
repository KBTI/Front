import React, { useEffect } from 'react';
import styled from 'styled-components';
import { QUESTION_LIST } from '../../utils/constant';
import Button from '../common/Button';
import useQuestion from './useQuestion';

function Question() {
  const { questionIndex, handleButtonClick } = useQuestion();

  const QUESTION = QUESTION_LIST[questionIndex];

  if (!QUESTION) return <div></div>;
  const { answers, question } = QUESTION;
  return (
    <QuestionWrapper>
      <h3>{`Q${questionIndex}`}</h3>
      <p>{question}</p>
      {answers.map((item) => {
        return (
          <Button key={item.id} onClick={() => handleButtonClick(item)}>
            {item.text}
          </Button>
        );
      })}
    </QuestionWrapper>
  );
}
export default Question;

const QuestionWrapper = styled.div`
  & > button {
    margin-top: 2rem;
  }
`;
