/* eslint-disable no-console */
import React from 'react';
import Persons from '../persons/persons';
import {PersonType} from '../../types';
import {ActionCreator, AppStateType, Operation} from '../../reducer';
import {connect} from 'react-redux';
import StartWindow from '../start-window/start-window';
import {getSortedPerson, getSortType} from '../../selector';
import Header from '../header/header';
import {Values} from '../person-form/person-form';


interface MapStatePropsType {
  persons: PersonType[],
  sortType: string,
  error: string | number,
  inputValue: string,
  isStart: boolean
}


interface MapDispatchToPropsType {
  onSortTitleClick: (sortType: string, isAscending: boolean) => void,
  onInputChange: (arg0: string) => void,
  onDataSizeButtonClick: (sizeType: string) => void,
  setError: (error: string) => void,
  onAddNewPersonButtonClick: (value : Values) => void
}


const App: React.FunctionComponent<MapStatePropsType & MapDispatchToPropsType> = (props: MapStatePropsType & MapDispatchToPropsType) => {
  const {error, persons, sortType, isStart, onDataSizeButtonClick, onSortTitleClick, onInputChange, onAddNewPersonButtonClick, setError} = props;

  return (
    isStart && persons.length === 0 ?
      <StartWindow
        error = {error}
        onDataSizeButtonClick = {onDataSizeButtonClick}
        setError = {setError}
      /> :
      <><Header
        onInputChange={onInputChange}
        onAddNewPersonButtonClick = {onAddNewPersonButtonClick}/>
      <Persons
        persons={persons}
        sortType={sortType}
        onSortTitleClick={onSortTitleClick}
      /></>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  persons: getSortedPerson(state),
  sortType: getSortType(state),
  error: state.error,
  inputValue: state.inputValue,
  isStart: state.isStart
});


const mapDispatchToProps = (dispath : any): MapDispatchToPropsType => ({
  onDataSizeButtonClick(sizeType) {
    dispath(Operation.loadPersons(sizeType));
  },
  onSortTitleClick(sortType, isAscending) {
    dispath(Operation.changeSortType(sortType, isAscending));
  },
  onInputChange(str) {
    dispath(ActionCreator.filterPersons(str));
  },
  setError(error) {
    dispath(ActionCreator.setError(error));
  },
  onAddNewPersonButtonClick(value) {
    dispath(ActionCreator.addNewPerson(value));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(App));
