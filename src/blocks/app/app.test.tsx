import React from "react";
import * as renderer from "react-test-renderer";
import {noop} from "../../common";
import {App} from "./app";


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


it(`App on the start should render start window `, () => {
  const tree = renderer
    .create(
        <App
          persons={[]}
          inputValue={``}
          sortType={``}
          isStart={true}
          error={``}
          onAddNewPersonButtonClick={noop}
          onDataSizeButtonClick={noop}
          onSortTitleClick={noop}
          onInputChange={noop}
          setError={noop}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`App with persons should render table block `, () => {
  const tree = renderer
    .create(
        <App
          persons={persons}
          inputValue={``}
          sortType={``}
          isStart={false}
          error={``}
          onAddNewPersonButtonClick={noop}
          onDataSizeButtonClick={noop}
          onSortTitleClick={noop}
          onInputChange={noop}
          setError={noop}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
