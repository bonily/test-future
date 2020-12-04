/* eslint-disable no-console */
import React, {useState} from 'react';
// import styled from 'styled-components';
import {PersonType} from '../../types';
import Pagination from '../pagination/pagination';
import TableBlock from '../table=block/table-block';
import {PERSON_PER_PAGE} from '../../const';
import PersonInfo from '../person-info/person-info';

interface Props {
  persons: PersonType[],
  sortType: string,
  onSortTitleClick: (sortType: string, isAscending: boolean) => void
}

const Persons: React.FunctionComponent<Props> = (props: Props) => {
  const {persons, sortType, onSortTitleClick} = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [activePersonId, setActivePersonId] = useState(-1);


  // Get current persons
  const indexOfLastPerson = currentPage * PERSON_PER_PAGE;
  const indexOfFirstPerson = indexOfLastPerson - PERSON_PER_PAGE;
  const currentPersons = persons.slice(indexOfFirstPerson, indexOfLastPerson);

  const activePerson = currentPersons.find((person) => person.id === activePersonId);
  console.log(persons);

  return (
    <><TableBlock
      persons={currentPersons}
      sortType={sortType}
      onSortTitleClick={onSortTitleClick}
      onPersonTrClick={setActivePersonId} />
    { activePersonId > -1 && <PersonInfo person={activePerson}/>}
    <Pagination personsPerPage={PERSON_PER_PAGE} totalPersons={persons.length} currentPage={currentPage} paginate={setCurrentPage} /></>
  );
};

export default Persons;
