import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px;
  height: 50px;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  transition: all 0.2s linear;
  background: #1b5da6;

  &:active:enabled {
    background: #7299c8;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
