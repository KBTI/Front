import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RESULT_LIST } from '../../utils/constant';
import Button from '../common/Button';
import { useKbtiDispatch } from '../context';
export interface ResultParamsType {
  id: string;
}

function Result() {
  const param = useParams<ResultParamsType>();
  const history = useHistory();
  const dispatch = useKbtiDispatch();

  const RESUlT = RESULT_LIST.find((item) => item.name === param.id);
  console.log(RESUlT);
  const handleReset = () => {
    dispatch({
      type: 'RESET',
    });
    history.push('/');
  };
  return (
    <ResultWrapper>
      <h3>{RESUlT.title}</h3>
      <ul>
        {RESUlT.contants.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <Button onClick={handleReset}>다시하기</Button>
    </ResultWrapper>
  );
}
export default Result;

const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;

  li {
    margin-top: 1rem;
  }
`;
