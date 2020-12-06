import React from "react";
import * as Enzyme from "enzyme";
import {configure} from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './app';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {ActionCreator, ActionType} from '../../reducer';
import {SORT_TYPES} from '../../const';

configure({
  adapter: new Adapter(),
});

const initialState = {
  persons: [],
  inputValue: ``,
  sortType: ``,
  isSortAscending: false,
  error: ``,
  isStart: true
};

const persons = [
  {
    address: {
      city: `Bradford`,
      state: `TX`,
      streetAddress: `7426 Suspendisse Dr`,
      zip: `14783`,
    },
    description: `pulvinar magna convallis quis porta adipiscing mi porta vestibulum elit amet ipsum egestas tortor suspendisse mattis rutrum lacus vel libero vitae sit dolor molestie lorem sed massa lacus lacus vitae placerat et`,
    email: `MRamsey@scelerisque.com`,
    firstName: `Jeri`,
    id: 714,
    lastName: `Wittcop`,
    phone: `(731)368-3302`
  },
  {
    address: {
      city: `Bradford`,
      state: `TX`,
      streetAddress: `7426 Suspendisse Dr`,
      zip: `14745`,
    },
    description: `pulvinar magna convallis quis porta adipiscing mi porta vestibulum elit amet ipsum egestas tortor suspendisse mattis rutrum lacus vel libero vitae sit dolor molestie lorem sed massa lacus lacus vitae placerat et`,
    email: `MRamsey@scelerisque.com`,
    firstName: `Bonya`,
    id: 120,
    lastName: `Wittcop`,
    phone: `(731)368-3302`
  }
];

const valueFromInput = {
  id: `1`,
  firstName: `Бу`,
  lastName: `Бу`,
  email: `bonily@mail.ru`,
  phone: `89035240491`,
  streetAddress: `бу`,
  city: `бу`,
  state: `бу`,
  zip: `123`,
  description: `бу`,
};

const mockStore = configureStore();

it(`Check current work with ActionCreator`, () => {
  const store = mockStore(initialState);

  const wrapper = Enzyme.shallow(
      <Provider store={store}>
        <App />
      </Provider>
  );

  expect(wrapper.find(App).length).toEqual(1);

  let action;
  store.dispatch(ActionCreator.changeSortType(SORT_TYPES.EMAIL, true));
  store.dispatch(ActionCreator.filterPersons(`1`));
  store.dispatch(ActionCreator.changeStartStatus());
  store.dispatch(ActionCreator.setError(`404`));
  store.dispatch(ActionCreator.loadPersons(persons));
  store.dispatch(ActionCreator.addNewPerson(valueFromInput));

  // eslint-disable-next-line prefer-const
  action = store.getActions();
  expect(action[0]).toEqual({type: ActionType.CHANGE_SORT_TYPE, payload: [SORT_TYPES.EMAIL, true]});
  expect(action[1]).toEqual({type: ActionType.FILTER_PERSONS, payload: `1`});
  expect(action[2]).toEqual({type: ActionType.CHANGE_START});
  expect(action[3]).toEqual({type: ActionType.SET_ERROR, payload: `404`});
  expect(action[4]).toEqual({type: ActionType.LOAD_PERSONS, payload: persons});
  expect(action[5]).toEqual({type: ActionType.ADD_NEW_PERSON, payload: valueFromInput});

});
