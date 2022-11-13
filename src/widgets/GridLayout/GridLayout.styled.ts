import styled, { css } from 'styled-components';
import { SizeProperties, Coordinates } from 'types/grid';

const commonStyles = css<SizeProperties>`
  width: ${({ width }) => width || 0}px;
  height: ${({ height }) => height || 0}px;
`;

export const StyledGridCell = styled.div<Coordinates & SizeProperties>`
  outline: 1px solid #dcd9d9;
  position: absolute;
  transform: ${({ x, y }) => {
    if (x >= 0 && y >= 0) {
      return css`
        translate(${x}px, ${y}px);
      `;
    }

    return css`translate(0px, 0px);`;
  }};
  ${commonStyles};
`;

export const StyledGridContainer = styled.div<SizeProperties>`
  width: ${({ width }) => width || 0}px;
  height: ${({ height }) => height || 0}px;
  position: relative;
  box-shadow: 0 1px 7px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;
