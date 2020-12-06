import React from "react";
import * as renderer from "react-test-renderer";
import {noop} from "../../common";
import PersonForm from "./person-form";


it(`Person form component shoul be render`, () => {
  const tree = renderer
  .create(<PersonForm
    onAddNewPersonButtonClick = {noop}
    setInputFormActive = {noop}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

