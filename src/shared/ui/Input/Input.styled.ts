import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label`
  margin-right: 10px;
  position: absolute;
`;

export const StyledInput = styled.input`
  height: 28px;
  color: #6f6e72;
  margin-top: 1.5rem;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #6f6e72;
  font-size: 16px;
  transition: border-color 0.4s linear;

  &:focus {
    outline-color: #1b5da6;
  }
`;
