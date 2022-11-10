import styled from 'styled-components';
import { RectangleProps } from 'types/rectangle';

interface StyledRectangleProps extends RectangleProps {
  backgroundColor: string;
}

export const StyledRectangle = styled.div<StyledRectangleProps>`
  position: ${({ position }) => position};
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  transform: translate(
    ${({ horizontalShiftPx }) => horizontalShiftPx}px,
    ${({ verticalShiftPx }) => verticalShiftPx}px
  );
  outline: 1px solid #b3b0b0;
`;
