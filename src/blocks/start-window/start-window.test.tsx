import React from 'react';
import * as renderer from "react-test-renderer";
import {noop} from "../../common";
import StartWindow from '../start-window/start-window';

it(`Start window should be rendered`, () => {
  const tree = renderer
  .create(<StartWindow
    error = {``}
    onDataSizeButtonClick = {noop}
    setError = {noop}
  />).toJSON();

  expect(tree).toMatchSnapshot();

});
