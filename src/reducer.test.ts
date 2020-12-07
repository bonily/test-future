import {SORT_TYPES} from "./const";
import {ActionCreator, AppStateType, reducer} from "./reducer";


let state: AppStateType;


beforeEach(() => {
  state = {
    persons: [],
    inputValue: ``,
    sortType: ``,
    isSortAscending: false,
    error: ``,
    isStart: true
  };
});


it(`ActionCreator function (change start status) should change the state`, () => {
  const newState = reducer(state, ActionCreator.changeStartStatus());
  expect(newState.isStart).toBeFalsy();
});

it(`ActionCreator function (chabge sort type) should change the state`, () => {
  const newState = reducer(state, ActionCreator.changeSortType(SORT_TYPES.EMAIL, true));
  expect(newState.sortType).toBe(SORT_TYPES.EMAIL);
  expect(newState.isSortAscending).toBeTruthy();
});

