import { FC } from 'react';

import { SizeProperties, GridElement } from 'types/grid';

import { StyledGridCell, StyledGridContainer } from './GridLayout.styled';
import { Rectangle } from 'shared/ui/Rectangle/Rectangle';

interface GridLayoutProps {
  size: number;
  grid: SizeProperties;
  items: GridElement[];
}

const createArray = (size: number) => new Array(size).fill(0);

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
          dataTestId={`element-${index}`}
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
