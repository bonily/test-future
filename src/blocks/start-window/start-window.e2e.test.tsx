import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from "react";
import {noop} from "../../common";
import StartWindow from '../start-window/start-window';


it(`After clicking on the button you will see block with "Загрузка"`, () => {

  render(<StartWindow
    error = {``}
    onDataSizeButtonClick = {noop}
    setError = {noop}
  />);

  const button = screen.getByRole(`button`, {name: `Полный список`});
  userEvent.click(button);
  expect(screen.queryByText(`Загрузка`)).not.toBeNull();
});


it(`Click on the button will start functions`, () => {
  const onDataSizeButtonClick = jest.fn();
  render(<StartWindow
    error = {``}
    onDataSizeButtonClick = {onDataSizeButtonClick}
    setError = {noop}
  />);

  const button = screen.getByRole(`button`, {name: `Короткий список`});
  userEvent.click(button);
  expect(onDataSizeButtonClick).toHaveBeenCalledTimes(1);
});

it(`After clicking on the button you will see block with "Загрузка"`, () => {
  render(<StartWindow
    error = {400}
    onDataSizeButtonClick = {noop}
    setError = {noop}
  />);

  const button = screen.getByRole(`button`, {name: `Полный список`});

  userEvent.click(button);
  expect(screen.queryByText(`Загрузка`)).toBeNull();
});

it(`After clicking on the button you will see block with "Ошибка"`, () => {
  render(<StartWindow
    error = {400}
    onDataSizeButtonClick = {noop}
    setError = {noop}
  />);

  const button = screen.getByRole(`button`, {name: `Полный список`});

  userEvent.click(button);
  expect(screen.queryByText(`Загрузка`)).toBeNull();
});
