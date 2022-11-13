import { CSSProperties } from 'react';

export interface RectangleStyledProps {
  position: CSSProperties['position'];
  width: number;
  height: number;
  horizontalShiftPx: number;
  verticalShiftPx: number;
}
