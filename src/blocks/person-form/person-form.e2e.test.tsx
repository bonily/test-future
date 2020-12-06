import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from "react";
import {noop} from "../../common";
import PersonForm from './person-form';


const value = {
  id: `1`,
  firstName: `Бу`,
  lastName: `Бу`,
  email: `bonily@mail.ru`,
  phone: `89035240491`,
  streetAddress: `бу`,
  city: `бу`,
  state: `бу`,
  zip: `123`,
  description: `бу`,
};

const valueFromInput = {
  id: 1,
  firstName: `Бу`,
  lastName: `Бу`,
  email: `bonily@mail.ru`,
  phone: `89035240491`,
  streetAddress: `бу`,
  city: `бу`,
  state: `бу`,
  zip: `123`,
  description: `бу`,
};

it(`Button should be disable on the start (without input values)`, () => {
  render(<PersonForm
    onAddNewPersonButtonClick = {noop}
    setInputFormActive = {noop}
  />);

  const addButton = screen.getByRole(`button`);

  expect(addButton).toBeDisabled();
});

it(`Button should be able with all values, send values and change visible status onClick)`, async () => {
  const onAddNewPersonButtonClick = jest.fn();
  const setInputFormActive = jest.fn();

  render(<PersonForm
    onAddNewPersonButtonClick = {onAddNewPersonButtonClick}
    setInputFormActive = {setInputFormActive}
  />);

  const id = screen.getByLabelText(`id`);
  const firstName = screen.getByLabelText(`firstName`);
  const lastName = screen.getByLabelText(`lastName`);
  const email = screen.getByLabelText(`email`);
  const phone = screen.getByLabelText(`phone`);
  const streetAddress = screen.getByLabelText(`streetAddress`);
  const city = screen.getByLabelText(`city`);
  const state = screen.getByLabelText(`state`);
  const zip = screen.getByLabelText(`zip`);
  const description = screen.getByLabelText(`description`);

  await waitFor(() => {

    userEvent.paste(id, value.id);
    userEvent.paste(firstName, value.firstName);
    userEvent.paste(lastName, value.lastName);
    userEvent.paste(email, value.email);
    userEvent.paste(phone, value.phone);
    userEvent.paste(streetAddress, value.streetAddress);
    userEvent.paste(city, value.city);
    userEvent.paste(state, value.state);
    userEvent.paste(zip, value.zip);
    userEvent.paste(description, value.description);
  });


  const addButton = screen.getByRole(`button`, {name: `Добавить нового пользователя`});
  expect(addButton).toBeEnabled();


  await waitFor(() => {
    userEvent.click(addButton);
  });

  expect(onAddNewPersonButtonClick).toHaveBeenCalledTimes(1);
  expect(setInputFormActive).toHaveBeenCalledTimes(1);
  expect(onAddNewPersonButtonClick).toHaveBeenCalledWith(valueFromInput);
  expect(setInputFormActive).toHaveBeenCalledWith(false);

});


