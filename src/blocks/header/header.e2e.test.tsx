import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from "react";
import Header from "./header";
import {noop} from "../../common";

it(`Find button should be pressed`, () => {
  const onInputChange = jest.fn();

  render(
      <Header
        onAddNewPersonButtonClick = {noop}
        onInputChange = {onInputChange}
      />
  );

  userEvent.click(screen.getByText(`Найти`));
  expect(onInputChange).toHaveBeenCalledTimes(1);
});

it(`Find button should be pressed`, () => {
  render(
      <Header
        onAddNewPersonButtonClick = {noop}
        onInputChange = {noop}
      />
  );

  userEvent.click(screen.getByText(`Добавить`));
  expect(screen.getByRole(`heading`)).toHaveTextContent(`Добавить нового пользователя`);
});

it(`Input value should be send with onInputChange function `, () => {
  const onInputChange = jest.fn();

  render(
      <Header
        onAddNewPersonButtonClick = {noop}
        onInputChange = {onInputChange}
      />
  );
  const inputValue = `Привет`;

  const input = screen.getByPlaceholderText(`Поиск`);
  userEvent.paste(input, inputValue);

  userEvent.click(screen.getByText(`Найти`));
  expect(onInputChange).toHaveBeenCalledWith(inputValue);
});
