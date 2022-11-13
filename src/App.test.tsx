import React from 'react';

import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';

import * as colorUtils from 'shared/lib/color/generateColor';

import App from './App';
import { CELL_SIZE } from './shared/constants/grid';

test('should enable add element button when inputs are correct', () => {
  render(<App />);

  userEvent.type(
    screen.getByRole('textbox', {
      name: 'Width of the element',
    }),
    '3'
  );

  userEvent.type(
    screen.getByRole('textbox', {
      name: 'Height of the element',
    }),
    '4'
  );

  expect(
    screen.getByRole('button', {
      name: 'Add element',
    })
  ).toBeEnabled();
});

test('should add new element with specific size and color', () => {
  render(<App />);

  const color = '#000000';

  jest.spyOn(colorUtils, 'generateColor').mockReturnValue(color);

  const width = 3;
  const height = 4;

  userEvent.type(
    screen.getByRole('textbox', {
      name: 'Width of the element',
    }),
    width.toString()
  );

  userEvent.type(
    screen.getByRole('textbox', {
      name: 'Height of the element',
    }),
    height.toString()
  );

  userEvent.click(
    screen.getByRole('button', {
      name: 'Add element',
    })
  );

  const addedElement = screen.getByTestId('element-0');

  expect(getComputedStyle(addedElement).width).toEqual(
    `${CELL_SIZE * width}px`
  );
  expect(getComputedStyle(addedElement).height).toEqual(
    `${CELL_SIZE * height}px`
  );
  expect(getComputedStyle(addedElement).backgroundColor).toEqual(
    'rgb(0, 0, 0)'
  );
});
