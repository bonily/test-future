/* eslint-disable no-console */

import React from 'react';
import styled from 'styled-components';
import {PersonType} from '../../types';
import TableTitle from '../table-title/table-title';
import {SORT_TYPES} from '../../const';


const titles = Object.values(SORT_TYPES);

const Table = styled.table`
  width: 100%;

  border: 1px solid #000000;
`;

const Tr = styled.tr``;

const Td = styled.td`
  padding: 5px;

  text-align: center;
`;


interface Props {
  persons: PersonType[],
  sortType: string,
  onSortTitleClick: (sortType: string, isAscending: boolean) => void,
  onPersonTrClick: (id: number) => void
}

const TableBlock: React.FunctionComponent<Props> = (props: Props) => {
  const {persons, sortType, onSortTitleClick, onPersonTrClick} = props;

  return (
    <Table>
      <colgroup>
        <col style = {{background: `yellow`}} />
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <tbody>
        <Tr>
          {titles.map((title, i) => {
            return (
              <TableTitle key={i} title={title} sortType={sortType} onSortTitleClick={onSortTitleClick}/>
            );
          })}
        </Tr>
        {persons.length > 0 ?
          persons.map((person, i) => {
            return (
              <Tr key = {i} onClick={() => onPersonTrClick(person.id)} >
                <Td>{person.id}</Td>
                <Td>{person.firstName}</Td>
                <Td>{person.lastName}</Td>
                <Td>{person.email}</Td>
                <Td>{person.phone}</Td>
              </Tr>
            );
          }) :
          <Tr>
            <Td colSpan={titles.length} style={{background: `pink`}}>Ничего не найдено</Td>
          </Tr>
        }
      </tbody>
    </Table>
  );
};

export default TableBlock;
