import React from 'react';
import * as renderer from "react-test-renderer";
import {noop} from "../../common";
import Pagination from './pagination';


it(`Paginate block should be rendered`, () => {
  const tree = renderer
  .create(<Pagination
    personsPerPage = {2}
    totalPersons = {20}
    currentPage = {3}
    paginate = {noop}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();

});
