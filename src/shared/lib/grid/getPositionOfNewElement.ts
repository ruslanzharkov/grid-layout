import { GridItem, Position, SizeProperties } from 'types/grid';

const fillMatrixWithNewPosition = (
  position: Position,
  element: SizeProperties,
  matrix: number[][]
) => {
  for (let i = position.y; i < element.height; i++) {
    for (let j = position.x; j < element.width + position.x; j++) {
      matrix[i][j] = 1;
    }
  }
};

export const getPositionOfNewElement = (
  gridSize: SizeProperties,
  gridItems: GridItem[],
  element: SizeProperties,
  matrix: number[][]
) => {
  const position: Position = { x: 0, y: 0 };

  if (!gridItems.length) {
    fillMatrixWithNewPosition(position, element, matrix);
  } else {
    let width;
    let height = 0;
    let x = 0;
    let y = 0;

    console.log(matrix);
    for (let i = 0; i < gridSize.height; i++) {
      width = 0;
      for (let j = 0; j < gridSize.width; j++) {
        if (matrix[i][j] === 1 && width < element.width) {
          width = 0;
        }

        if (matrix[i][j] === 0) {
          if (width === 0 && x === 0) {
            x = j;
          }

          width++;
        }

        if (width === element.width) {
          if (height === 0) {
            y = i;
          }
          height++;
          break;
        }
      }

      if (height === element.height) {
        break;
      }
    }
    position.x = x;
    position.y = y;

    console.log(x);
    console.log(y);
    console.log(height);

    fillMatrixWithNewPosition({ x, y: y }, element, matrix);
  }

  return { position, updatedMatrix: matrix };
};
