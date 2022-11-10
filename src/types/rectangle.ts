import { CSSProperties } from 'react';

export interface RectangleProps {
  position: CSSProperties['position'];
  width: number;
  height: number;
  horizontalShiftPx: number;
  verticalShiftPx: number;
}
