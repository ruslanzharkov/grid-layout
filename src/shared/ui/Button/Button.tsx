import {
  FC,
  HTMLProps,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';

import { StyledButton } from './Button.styled';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  id: string;
  onClick: MouseEventHandler;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  id,
  onClick,
  children,
  disabled,
}): ReactElement => {
  return (
    <StyledButton disabled={disabled} id={id} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
