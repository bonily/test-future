import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from "react";
import {noop} from "../../common";
import Persons from './persons';

const persons = [
  {
    address: {
      city: `Bradford`,
      state: `TX`,
      streetAddress: `7426 Suspendisse Dr`,
      zip: `14783`,
    },
    description: `pulvinar magna convallis quis porta adipiscing mi porta vestibulum elit amet ipsum egestas tortor suspendisse mattis rutrum lacus vel libero vitae sit dolor molestie lorem sed massa lacus lacus vitae placerat et`,
    email: `MRamsey@scelerisque.com`,
    firstName: `Jeri`,
    id: 714,
    lastName: `Wittcop`,
    phone: `(731)368-3302`
  },
  {
    address: {
      city: `Bradford`,
      state: `TX`,
      streetAddress: `7426 Suspendisse Dr`,
      zip: `14745`,
    },
    description: `pulvinar magna convallis quis porta adipiscing mi porta vestibulum elit amet ipsum egestas tortor suspendisse mattis rutrum lacus vel libero vitae sit dolor molestie lorem sed massa lacus lacus vitae placerat et`,
    email: `MRamsey@scelerisque.com`,
    firstName: `Bonya`,
    id: 120,
    lastName: `Wittcop`,
    phone: `(731)368-3302`
  }
];

const sortType = `email`;


it(`Persons block should be render`, () => {

  render(
      <Persons
        persons = {persons}
        sortType = {sortType}
        onSortTitleClick = {noop}
      />
  );
  const person = persons[1];
  const personTr = screen.getByText(person.firstName);

  userEvent.click(personTr);
  expect(screen.queryByText(person.description)).not.toBeNull();
});
