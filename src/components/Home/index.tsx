import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

function Home() {
  return (
    <HomeWrapper>
      <h1>일제감정기 시절 나는 독립운동가? 친일파?</h1>
      <Button>시작하기</Button>
    </HomeWrapper>
  );
}
export default Home;

const HomeWrapper = styled.div`
  & > h1 {
    text-align: center;
  }
`;
