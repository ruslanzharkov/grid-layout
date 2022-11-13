import { FC, HTMLProps } from 'react';

import { StyledInput, StyledInputContainer, StyledLabel } from './Input.styled';

export const Input: FC<HTMLProps<HTMLInputElement>> = ({
  id,
  name,
  label,
  value,
  type,
  onChange,
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        onChange={onChange}
        name={name}
        value={value}
        type={type}
        id={id}
      />
    </StyledInputContainer>
  );
};
