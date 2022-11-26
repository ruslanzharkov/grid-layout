import styled from 'styled-components';
import { RectangleStyledProps } from 'types/rectangle';

interface StyledRectangleProps extends RectangleStyledProps {
  backgroundColor: string;
}

export const StyledRectangle = styled.div<StyledRectangleProps>`
  position: ${({ position }) => position};
  // fallback background color in case generated incorrect color
  background-color: chartreuse;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  transform: translate(
    ${({ horizontalShiftPx }) => horizontalShiftPx}px,
    ${({ verticalShiftPx }) => verticalShiftPx}px
  );
  box-shadow: inset 0 0 0 0.5px #b3b0b0;
`;
