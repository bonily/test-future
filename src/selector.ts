import {createSelector} from 'reselect';
import {getPersonsBySortType, getFilteredPersons} from './common';
import {AppStateType} from './reducer';
import {PersonType} from './types';


export const getPersons = (state : AppStateType) : PersonType[] => {
  return getFilteredPersons(state.persons, state.inputValue);
};

export const getSortType = (state : AppStateType) : string => {
  return state.sortType;
};

export const getAscendingStatus = (state : AppStateType) : boolean => {
  return state.isSortAscending;
};


export const getSortedPerson = createSelector(
    getPersons,
    getSortType,
    getAscendingStatus,
    (persons, sortType, ascendingStatus) => {
      return getPersonsBySortType(persons, sortType, ascendingStatus);
    }
);
