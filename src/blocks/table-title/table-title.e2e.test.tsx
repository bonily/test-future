import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from "react";
import {noop} from "../../common";
import TableTitle from './table-title';

const title = `email`;

const sortType = `phone`;

it(`Click on the title click should send title name to the reducer`, () => {
  const onSortTitleClick = jest.fn();

  render(
      <table><tbody><tr>
        <TableTitle
          title = {title}
          sortType = {sortType}
          onSortTitleClick = {onSortTitleClick}
        /></tr></tbody></table>);

  const titleTh = screen.getByRole(`columnheader`);

  userEvent.click(titleTh);
  expect(onSortTitleClick).toHaveBeenCalledTimes(1);
  expect(onSortTitleClick).toHaveBeenCalledWith(title, true);
});
