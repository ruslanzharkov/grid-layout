import { Coordinates, SizeProperties } from 'types/grid';

export const fillMatrixWithNewPosition = (
  position: Coordinates,
  element: SizeProperties,
  matrix: number[][]
) => {
  // start from the specific position and fill the necessary cells
  for (let i = position.y; i < element.height + position.y; i++) {
    for (let j = position.x; j < element.width + position.x; j++) {
      matrix[i][j] = 1;
    }
  }
};

export const getPositionOfNewElement = (
  grid: SizeProperties,
  matrix: number[][],
  element: SizeProperties
) => {
  const position: Coordinates = { x: 0, y: 0 };

  let count = 0;
  let x = 0;
  let y = 0;
  let isFound = false;

  // pre-add new rows in case we reached
  // the end of the grid and there is no space for the new element
  for (let i = 0; i < element.height; i++) {
    const emptyRow = new Array(grid.width).fill(0);
    matrix.push(emptyRow);
  }

  for (let i = 0; i < grid.height; i++) {
    for (let j = 0; j < grid.width; j++) {
      count = 0;

      // summarize the cells from the current point till the element's size
      for (let k = i; k < element.height + i; k++) {
        for (let l = j; l < element.width + j; l++) {
          if (matrix[k] !== undefined) {
            count += matrix[k][l];
          }
        }
      }

      // if there is no filled cells, get coordinates
      if (count === 0) {
        x = j;
        y = i;
        isFound = true;
        break;
      }
    }

    if (isFound) {
      break;
    }
  }

  // cut extra added empty rows when they were
  // not used for the new element
  const newGridHeight = y + element.height;
  matrix.length = newGridHeight > grid.height ? newGridHeight : grid.height;

  position.x = x;
  position.y = y;

  // update matrix with new coordinates
  fillMatrixWithNewPosition(position, element, matrix);

  return { position, updatedMatrix: matrix, updatedHeight: matrix.length };
};
