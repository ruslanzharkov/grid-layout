import { SizeProperties } from 'types/grid';
import {
  fillMatrixWithNewPosition,
  getPositionOfNewElement,
} from './getPositionOfNewElement';
import { constructEmptyMatrix } from './constructEmptyMatrix';

test('should set first element to top left', () => {
  /*
   *  initial matrix is empty
   * 0 0 0 0 0 0 0
   * 0 0 0 0 0 0 0
   * 0 0 0 0 0 0 0
   * 0 0 0 0 0 0 0
   *
   * after the first insert we'll have the following :
   * 1 1 0 0 0 0 0
   * 1 1 0 0 0 0 0
   * 0 0 0 0 0 0 0
   * 0 0 0 0 0 0 0
   * */

  const grid: SizeProperties = { width: 7, height: 4 };
  const element: SizeProperties = { width: 2, height: 2 };
  const matrix = constructEmptyMatrix(grid.width, grid.height);

  const expectedPosition = { x: 0, y: 0 };

  const updatedMatrix = constructEmptyMatrix(grid.width, grid.height);
  fillMatrixWithNewPosition(expectedPosition, element, updatedMatrix);

  expect(getPositionOfNewElement(grid, matrix, element)).toEqual({
    position: expectedPosition,
    updatedMatrix,
    updatedHeight: grid.height,
  });
});

test('should set element to next available space', () => {
  /*
   *  initial matrix will be like this (some elements are already on the grid)
   * 1 1 1 1 1 1 1
   * 1 1 0 0 0 0 0
   * 0 0 0 0 0 0 0
   * 0 0 0 0 0 0 0
   *
   * after finding proper position matrix should be filled in the following way:
   * 1 1 1 1 1 1 1
   * 1 1 1 1 1 1 1
   * 0 0 1 1 1 1 1
   * 0 0 0 0 0 0 0
   * */

  const grid: SizeProperties = { width: 7, height: 4 };
  const element: SizeProperties = { width: 5, height: 2 };
  const matrix = constructEmptyMatrix(grid.width, grid.height);
  matrix[0] = [1, 1, 1, 1, 1, 1, 1];
  matrix[1] = [1, 1, 0, 0, 0, 0, 0];

  const expectedPosition = { x: 2, y: 1 };

  const updatedMatrix = constructEmptyMatrix(grid.width, grid.height);
  updatedMatrix[0] = [1, 1, 1, 1, 1, 1, 1];
  updatedMatrix[1] = [1, 1, 0, 0, 0, 0, 0];
  fillMatrixWithNewPosition(expectedPosition, element, updatedMatrix);

  expect(getPositionOfNewElement(grid, matrix, element)).toEqual({
    position: expectedPosition,
    updatedMatrix,
    updatedHeight: grid.height,
  });
});

test(
  'should set the element and add the new rows accordingly ' +
    'due to the lack of the available space',
  () => {
    /*
     *  initial matrix will be like this (there is no space for new element)
     * 1 1 1 1 1 1 1
     * 1 1 1 1 1 1 1
     * 1 1 1 1 1 1 1
     * 1 1 0 0 0 0 0
     *
     * after finding proper position matrix height will be increased
     * for additional rows:
     * 1 1 1 1 1 1 1
     * 1 1 1 1 1 1 1
     * 1 1 1 1 1 1 1
     * 1 1 1 1 0 0 0
     * 0 0 1 1 0 0 0
     * 0 0 1 1 0 0 0
     * */

    const grid: SizeProperties = { width: 7, height: 4 };
    const element: SizeProperties = { width: 2, height: 3 };
    const matrix = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0],
    ];

    const expectedPosition = { x: 2, y: 3 };

    const updatedMatrix: number[][] = Object.assign([], matrix);
    updatedMatrix[3] = [1, 1, 1, 1, 0, 0, 0];
    updatedMatrix[4] = [0, 0, 1, 1, 0, 0, 0];
    updatedMatrix[5] = [0, 0, 1, 1, 0, 0, 0];

    expect(getPositionOfNewElement(grid, matrix, element)).toEqual({
      position: expectedPosition,
      updatedMatrix,
      updatedHeight: updatedMatrix.length,
    });
  }
);
