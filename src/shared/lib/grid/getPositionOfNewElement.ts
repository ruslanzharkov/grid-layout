import { GridItem, Position, SizeProperties } from 'types/grid';

const fillMatrixWithNewPosition = (
  position: Position,
  element: SizeProperties,
  matrix: number[][]
) => {
  for (let i = position.y; i < element.height + position.y; i++) {
    for (let j = position.x; j < element.width + position.x; j++) {
      matrix[i][j] = 1;
    }
  }
};

// algorithm with collisions, 2 nested loops
export const getPositionOfNewElement2 = (
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
    let visitedCellsPerRow = 0;
    const x = [];
    let y = 0;

    for (let i = 0; i < gridSize.height; i++) {
      width = 0;
      visitedCellsPerRow = 0;

      for (let j = 0; j < gridSize.width; j++) {
        // x is not changed and there are several cells left
        if (!x.length && gridSize.width - visitedCellsPerRow < element.width) {
          continue;
        }

        // when cell not enough and new cell = 1, reset to 0
        if (matrix[i][j] === 1 && width < element.width) {
          width = 0;
          console.log(j);
        }

        // add cell to width count
        if (matrix[i][j] === 0) {
          if (width === 0) {
            x.push(j);
          }

          width++;
        }

        visitedCellsPerRow++; // count all visited cells per row
        if (width === element.width) {
          // remember when y is the first entry point
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

    // if (element.height + k > gridSize.height) {
    //   const additionalRows = gridSize.height - (element.height + k);
    //   console.log(additionalRows);
    //
    //   for (let i = 0; i < additionalRows; i++) {
    //     const emptyRow = new Array(gridSize.width).fill(0);
    //     matrix.push(emptyRow);
    //   }
    // }

    position.x = x[0] < x[x.length - 1] ? x[x.length - 1] : x[0];
    position.y = y;

    console.log(x);
    console.log(y);

    fillMatrixWithNewPosition(position, element, matrix);
  }

  return { position, updatedMatrix: matrix };
};

// algorithm without collisions, 4 nested loops
export const getPositionOfNewElement = (
  gridSize: SizeProperties,
  gridItems: GridItem[],
  element: SizeProperties,
  matrix: number[][]
) => {
  const position: Position = { x: 0, y: 0 };

  let count = 0;
  let x = 0;
  let y = 0;
  let isFound = false;

  for (let i = 0; i < gridSize.height; i++) {
    for (let j = 0; j < gridSize.width; j++) {
      count = 0;

      for (let k = i; k < element.height + i; k++) {
        for (let l = j; l < element.width + j; l++) {
          count += matrix[k][l];
        }
      }
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

  // if (element.height + k > gridSize.height) {
  //   const additionalRows = gridSize.height - (element.height + k);
  //   console.log(additionalRows);
  //
  //   for (let i = 0; i < additionalRows; i++) {
  //     const emptyRow = new Array(gridSize.width).fill(0);
  //     matrix.push(emptyRow);
  //   }
  // }

  position.x = x;
  position.y = y;

  fillMatrixWithNewPosition(position, element, matrix);

  return { position, updatedMatrix: matrix };
};
