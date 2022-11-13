import { ChangeEvent, useState } from 'react';

import { GridLayout } from 'widgets/GridLayout';

import { GlobalStyles } from 'shared/styles';
import {
  constructEmptyMatrix,
  getPositionOfNewElement,
} from 'shared/lib/matrix';

import { GridElement, SizeProperties } from 'types/grid';

import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import { CELL_SIZE } from 'shared/constants/grid';

import { StyledAppContainer, StyledInputsContainer } from './App.styled';

function App() {
  const [gridSize, setGridSize] = useState<SizeProperties>({
    width: 16,
    height: 8,
  });
  const [matrix, setMatrix] = useState<number[][]>(() =>
    constructEmptyMatrix(gridSize.width, gridSize.height)
  );
  const [gridItems, setGridItems] = useState<GridElement[]>([]);
  const [newElement, setNewElement] = useState<SizeProperties>({
    width: 0,
    height: 0,
  });

  const handleNewElementPositionChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value.replace(/\D/gi, '') || '0');

    setNewElement((prevState) => ({
      ...prevState,
      [event.target.name]: value,
    }));
  };

  const handleAddElementClick = () => {
    if (newElement.width <= gridSize.width) {
      const copiedMatrix = Object.assign([], matrix);
      const { position, updatedMatrix, updatedHeight } =
        getPositionOfNewElement(gridSize, copiedMatrix, newElement);

      setGridSize((prevState) => ({
        ...prevState,
        height: updatedHeight,
      }));
      setMatrix(updatedMatrix);
      setGridItems((prevState) =>
        prevState.concat([{ ...position, ...newElement }])
      );
    }
  };

  return (
    <>
      <GlobalStyles />
      <StyledAppContainer>
        <StyledInputsContainer>
          <Input
            id="width"
            name="width"
            label="Width of the element"
            value={newElement.width}
            type="text"
            onChange={handleNewElementPositionChange}
          />
          <Input
            id="height"
            name="height"
            label="Height of the element"
            value={newElement.height}
            type="text"
            onChange={handleNewElementPositionChange}
          />

          <Button
            disabled={!newElement.width || !newElement.height}
            id="add-element"
            onClick={handleAddElementClick}
          >
            Add element
          </Button>
        </StyledInputsContainer>
        <GridLayout size={CELL_SIZE} grid={gridSize} items={gridItems} />
      </StyledAppContainer>
    </>
  );
}

export default App;
