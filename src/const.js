export const SORT_TYPES = {
  ID: `id`,
  FIRST_NAME: `firstName`,
  LAST_NAME: `lastName`,
  EMAIL: `email`,
  PHONE: `phone`
};

export const DATA_SIZE = {
  ALL: `ALL`,
  SMALL: `SMALL`
};

export const ERROR_TYPES = {
  NETWORK: `Network Error`,
  BAD_REQUEST: 400,
};

export const DATA_URL = {
  ALL: `/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
  SMALL: `/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
};

export const PERSON_PER_PAGE = 50;
