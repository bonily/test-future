import * as React from "react";
import * as renderer from "react-test-renderer";
import {noop} from "../../common";
import Header from "./header";

it(`Header shiold render Header block`, () => {
  const tree = renderer
  .create(<Header
    onAddNewPersonButtonClick = {noop}
    onInputChange = {noop}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
