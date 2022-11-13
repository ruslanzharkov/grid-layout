import { constructEmptyMatrix } from './constructEmptyMatrix';
import { SizeProperties } from 'types/grid';

test('should construct empty matrix by grid params', () => {
  const grid: SizeProperties = { width: 3, height: 2 };

  expect(constructEmptyMatrix(grid.width, grid.height)).toEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]);
});
