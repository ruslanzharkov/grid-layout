import { FC } from 'react';

import { SizeProperties, GridItem } from 'types/grid';

import { StyledGridCell, StyledGridContainer } from './GridLayout.styled';
import { Rectangle } from 'shared/ui/Rectangle/Rectangle';

interface GridLayoutProps {
  size: number;
  grid: SizeProperties;
  items: GridItem[];
}

const createArray = (size: number) => {
  return new Array(size).fill(0);
};

export const GridLayout: FC<GridLayoutProps> = ({ grid, items, size }) => {
  const gridWidth = grid.width * size;
  const gridHeight = grid.height * size;

  return (
    <StyledGridContainer width={gridWidth} height={gridHeight}>
      {createArray(grid.height).map((_, heightIndex) =>
        createArray(grid.width).map((_, widthIndex) => (
          <StyledGridCell
            key={widthIndex + heightIndex + 1}
            x={size * widthIndex}
            y={size * heightIndex}
            height={size}
            width={size}
          />
        ))
      )}

      {items.map((item, index) => (
        <Rectangle
          key={index}
          position="absolute"
          width={item.width * size}
          height={item.height * size}
          horizontalShiftPx={item.x * size}
          verticalShiftPx={item.y * size}
        />
      ))}
    </StyledGridContainer>
  );
};
