import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from "react";
import Pagination from './pagination';

it(`Click on page number should start change pagination function`, () => {
  const paginate = jest.fn();

  render(<Pagination
    personsPerPage = {2}
    totalPersons = {20}
    currentPage = {3}
    paginate = {paginate}
  />);

  const number = `5`;

  const pageNumberToClick = screen.getByRole(`link`, {name: number});

  userEvent.click(pageNumberToClick);

  expect(paginate).toHaveBeenCalledWith(Number(number));
  expect(paginate).toHaveBeenCalledTimes(1);

});
