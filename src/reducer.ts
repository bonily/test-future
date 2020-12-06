import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {PersonType} from './types';
import {extend, castFormValueToPersonType} from './common';
import {DATA_SIZE, DATA_URL} from './const';
import {Values} from './blocks/person-form/person-form';

export interface AppStateType {
  persons: PersonType[] | any,
  inputValue: string,
  sortType: string,
  isSortAscending: boolean,
  error: string | number,
  isStart: boolean
}

const initialState = {
  persons: [],
  inputValue: ``,
  sortType: ``,
  isSortAscending: false,
  error: ``,
  isStart: true
};

const ActionType = {
  LOAD_PERSONS: `LOAD_PERSONS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  FILTER_PERSONS: `FILTER_PERSON`,
  SET_ERROR: `SET_ERROR`,
  CHANGE_START: `CHANGE_START`,
  ADD_NEW_PERSON: `ADD_NEW_PERSON`
};

const ActionCreator = {
  loadPersons: (persons: PersonType[]):{type: string, payload: PersonType[]} => {
    return {
      type: ActionType.LOAD_PERSONS,
      payload: persons
    };
  },
  changeSortType: (sortType: string, isAscending: boolean): {type: string, payload: [string, boolean | undefined]}=> {
    return {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: [sortType, isAscending]
    };
  },
  filterPersons: (filter: string): {type: string, payload: string} => {
    return {
      type: ActionType.FILTER_PERSONS,
      payload: filter
    };
  },
  setError: (error: string): {type: string, payload: string} => {
    return {
      type: ActionType.SET_ERROR,
      payload: error
    };
  },
  changeStartStatus: () : {type: string} => {
    return {
      type: ActionType.CHANGE_START,
    };
  },
  addNewPerson: (person: Values) : {type: string, payload: Values} => {
    return {
      type: ActionType.ADD_NEW_PERSON,
      payload: person
    };
  }
};

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, any, Action<string>>

const Operation = {
  loadPersons: (size: string) => (dispatch: (arg0: { type: string; payload?: PersonType[]; }) => void, _getState: () => void, api: { get: (arg0: string) => Promise<PersonType[]>; }) => {
    if (size === DATA_SIZE.SMALL) {
      return api.get(DATA_URL.SMALL)
      .then((response : any) => {
        dispatch(ActionCreator.loadPersons((response.data)));
        dispatch(ActionCreator.changeStartStatus());
      });
    } else {
      return api.get(DATA_URL.ALL)
      .then((response : any) => {
        dispatch(ActionCreator.loadPersons((response.data)));
        dispatch(ActionCreator.changeStartStatus());
      });
    }
  },
  changeSortType: (sortType: string, isAscending: boolean) : AppThunk => (dispatch: (arg0: { type: string; payload?: [string, boolean | undefined]}) => void) => {
    dispatch(ActionCreator.changeSortType(sortType, isAscending));
  },
};


const reducer = (state: AppStateType = initialState, action: any): AppStateType => {
  switch (action.type) {
    case ActionType.LOAD_PERSONS:
      return extend(state, {
        persons: action.payload,
        isLoaded: true
      });
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload[0],
        isSortAscending: action.payload[1]
      });
    case ActionType.FILTER_PERSONS:
      return extend(state, {
        inputValue: action.payload
      });
    case ActionType.SET_ERROR:
      return extend(state, {
        error: action.payload
      });
    case ActionType.CHANGE_START:
      return extend(state, {
        isStart: !state.isStart
      });
    case ActionType.ADD_NEW_PERSON:
      const newPerson = castFormValueToPersonType(action.payload);
      const newPersons = state.persons.slice();
      newPersons.unshift(newPerson);
      return extend(state, {
        persons: newPersons,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
