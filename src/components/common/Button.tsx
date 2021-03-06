import React from 'react';
import styled from 'styled-components';

interface ButtonPropsType {
  children?: React.ReactElement | string;
  onClick?: (target?: any) => void;
}

export default function Button({
  onClick,
  children,
  ...props
}: ButtonPropsType) {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  margin: 0;
  padding: 0;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  cursor: pointer;
  -webkit-appearance: none;
  border: 1px solid black;
  &:focus {
    outline: none;
  }
`;
