import { FC, useMemo } from 'react';

import { RectangleStyledProps } from 'types/rectangle';
import { generateColor } from 'shared/lib/color/generateColor';

import { StyledRectangle } from './Rectangle.styled';

interface RectangleProps extends RectangleStyledProps {
  dataTestId?: string;
}

export const Rectangle: FC<RectangleProps> = ({
  position,
  width,
  height,
  verticalShiftPx,
  horizontalShiftPx,
  dataTestId,
}) => {
  const backgroundColor = useMemo(() => generateColor(), []);

  return (
    <StyledRectangle
      data-testid={dataTestId}
      position={position}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      verticalShiftPx={verticalShiftPx}
      horizontalShiftPx={horizontalShiftPx}
    />
  );
};
