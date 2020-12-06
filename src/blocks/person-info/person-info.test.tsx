import React from 'react';
import * as renderer from "react-test-renderer";
import PersonInfo from './person-info';


const person = {
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
};


it(`Person info should bs rendered`, () => {
  const tree = renderer
    .create(<PersonInfo
      person = {person}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Person info should bs rendered`, () => {
  const tree = renderer
    .create(<PersonInfo
      person = {undefined}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

