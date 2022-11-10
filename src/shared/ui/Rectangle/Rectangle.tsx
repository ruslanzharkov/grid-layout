import { FC, useMemo } from 'react';
import { generateColor } from 'shared/lib/color/generateColor';
import { StyledRectangle } from './Rectangle.styled';
import { RectangleProps } from 'types/rectangle';

export const Rectangle: FC<RectangleProps> = ({
  position,
  width,
  height,
  verticalShiftPx,
  horizontalShiftPx,
}) => {
  const backgroundColor = useMemo(() => generateColor(), []);

  return (
    <StyledRectangle
      position={position}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      verticalShiftPx={verticalShiftPx}
      horizontalShiftPx={horizontalShiftPx}
    />
  );
};
