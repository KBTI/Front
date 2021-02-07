import React from 'react';
import styled from 'styled-components';

export interface LayoutPropsType {
  children?: React.ReactElement;
}

function Layout({ children, ...props }: LayoutPropsType) {
  return <LayoutWrapper {...props}>{children}</LayoutWrapper>;
}
export default Layout;

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  max-width: 750px;
  border: 1px solid rebeccapurple;
  margin: 0 auto;

  & > div {
    width: 100%;
    height: 100%;
  }
`;
