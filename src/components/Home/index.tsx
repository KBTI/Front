import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import { useKbtiDispatch } from '../context';

function Home() {
  const dispatch = useKbtiDispatch();
  const history = useHistory();

  const goToNextPage = () => {
    dispatch({
      type: 'NEXT_PAGE',
    });
    history.push('/question');
  };

  return (
    <HomeWrapper>
      <h1>일제감정기 시절 나는 독립운동가? 친일파?</h1>
      <Button onClick={goToNextPage}>시작하기</Button>
    </HomeWrapper>
  );
}
export default Home;

const HomeWrapper = styled.div`
  & > h1 {
    text-align: center;
  }
`;
