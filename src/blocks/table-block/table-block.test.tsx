import React from 'react';
import * as renderer from "react-test-renderer";
import {noop} from "../../common";
import TableBlock from "./table-block";

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

it(`Person form component should be render with person array length > 0`, () => {
  const tree = renderer
  .create(<TableBlock
    persons = {persons}
    sortType = {sortType}
    onPersonTrClick = {noop}
    onSortTitleClick = {noop}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});


it(`Person form component shoul be render with person array length < 0`, () => {
  const tree = renderer
  .create(<TableBlock
    persons = {[]}
    sortType = {sortType}
    onPersonTrClick = {noop}
    onSortTitleClick = {noop}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
