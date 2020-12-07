/* eslint-disable no-console */
import {PersonType} from './types';
import {Values} from './blocks/person-form/person-form';
import {SORT_TYPES} from "./const";

export const extend = (a : any, b: any): any => {
  return Object.assign({}, a, b);
};

export const getPersonsBySortType = (persons : PersonType[], sortType : string, ascending : boolean): PersonType[] => {
  const copyArray = persons.slice();
  switch (sortType) {
    case SORT_TYPES.FIRST_NAME:
      return copyArray.sort((a, b) => ascending ? a.firstName.localeCompare(b.firstName) : b.firstName.localeCompare(a.firstName));
    case SORT_TYPES.LAST_NAME:
      return copyArray.sort((a, b) => ascending ? a.lastName.localeCompare(b.lastName) : b.lastName.localeCompare(a.lastName));
    case SORT_TYPES.EMAIL:
      return copyArray.sort((a, b) => ascending ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email));
    case SORT_TYPES.ID:
      return copyArray.sort((a, b) => ascending ? a.id - b.id : b.id - a.id);
    case SORT_TYPES.PHONE:
      return copyArray.sort((a, b) => ascending ? a.phone.localeCompare(b.phone) : b.phone.localeCompare(a.phone));
  }
  return copyArray;
};

export const noop = () : void => {
  // do nothing
};

export const getFilteredPersons = (persons : PersonType[], str = ``):PersonType[] => {
  console.log(str);
  return persons.filter((person) =>
    person.firstName.toLowerCase().indexOf(str) > -1 ||
    String(person.id).indexOf(str) > -1 ||
    person.lastName.toLowerCase().indexOf(str) > -1 ||
    person.email.toLowerCase().indexOf(str) > -1 ||
    person.phone.toLowerCase().indexOf(str) > -1 ||
    person.address.streetAddress.toLowerCase().indexOf(str) > -1 ||
    person.address.state.toLowerCase().indexOf(str) > -1 ||
    person.address.zip.toLowerCase().indexOf(str) > -1 ||
    person.address.city.toLowerCase().indexOf(str) > -1);
};


export const castFormValueToPersonType = (value: Values) : PersonType => {
  return {
    id: Number(value.id),
    firstName: value.firstName,
    lastName: value.lastName,
    email: value.email,
    phone: value.phone,
    address: {
      streetAddress: value.streetAddress,
      city: value.city,
      state: value.state,
      zip: value.zip
    },
    description: value.description,
  };
};
