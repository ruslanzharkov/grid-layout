import { ChangeEvent, useState } from 'react';

import { GridLayout } from 'widgets/GridLayout';

import { GlobalStyles } from 'shared/styles';
import { getPositionOfNewElement } from 'shared/lib/grid/getPositionOfNewElement';

import { StyledAppContainer, StyledInputsContainer } from './App.styled';
import { GridItem, SizeProperties } from 'types/grid';

// 1 1 0 0 0
// 1 1 0 0 0
// 0 0 0 0 0

function App() {
  const [gridSize, setGridSize] = useState<SizeProperties>({
    width: 16,
    height: 8,
  });
  const [matrix, setMatrix] = useState<number[][]>(() => {
    const initialMatrix = [] as number[][];

    for (let i = 0; i < gridSize.height; i++) {
      initialMatrix[i] = [];
      for (let j = 0; j < gridSize.width; j++) {
        initialMatrix[i].push(0);
      }
    }

    return initialMatrix;
  });

  const [cellSize, setCellSize] = useState(50);
  const [newElement, setNewElement] = useState<SizeProperties>({
    width: 0,
    height: 0,
  });

  const [gridItems, setGridItems] = useState<GridItem[]>([]);

  const handleNewElementPositionChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    let value = parseInt(event.target.value);
    if (isNaN(value)) {
      value = 0;
    }

    setNewElement((prevState) => ({
      ...prevState,
      [event.target.name]: value,
    }));
  };

  const handleGridCellSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCellSize(parseInt(event.target.value));
  };

  const handleAddElementClick = () => {
    const copiedMatrix = Object.assign([], matrix);
    const { position, updatedMatrix } = getPositionOfNewElement(
      gridSize,
      gridItems,
      newElement,
      copiedMatrix
    );

    setMatrix(updatedMatrix);
    setGridItems((prevState) =>
      prevState.concat([{ ...position, ...newElement }])
    );
  };

  return (
    <>
      <GlobalStyles />
      <StyledAppContainer>
        <StyledInputsContainer>
          <div>
            <h5>Size of the grid</h5>
            <div>
              px per cell:{' '}
              <input
                type="number"
                value={cellSize}
                onChange={handleGridCellSizeChange}
              />
            </div>
          </div>

          <div>
            <h5>Element to be added</h5>
            <div>
              width of the element:{' '}
              <input
                name="width"
                type="text"
                value={newElement.width}
                onChange={handleNewElementPositionChange}
              />
            </div>
            <div>
              height of the element:{' '}
              <input
                name="height"
                type="text"
                value={newElement.height}
                onChange={handleNewElementPositionChange}
              />
            </div>
            <button onClick={handleAddElementClick}>Add element</button>
          </div>
        </StyledInputsContainer>
        <GridLayout size={cellSize} grid={gridSize} items={gridItems} />
      </StyledAppContainer>
    </>
  );
}

export default App;
