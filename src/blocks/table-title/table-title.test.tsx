import React from 'react';
import * as renderer from "react-test-renderer";
import {noop} from "../../common";
import TableTitle from './table-title';

const title = `email`;

const sortType = `phone`;


it(`Title Block should be render when sort type != title`, () => {
  const tree = renderer
  .create(<TableTitle
    title = {title}
    sortType = {sortType}
    onSortTitleClick = {noop}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Title Block should be render when sort type = title`, () => {
  const tree = renderer
  .create(<TableTitle
    title = {title}
    sortType = {title}
    onSortTitleClick = {noop}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
