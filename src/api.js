/* eslint-disable no-console */
import axios from "axios";
import {ERROR_TYPES} from "./const";


export const createApi = (onNetworkError) => {
  const api = axios.create({
    baseURL: `http://www.filltext.com`,
    timeout: 10000,
    withCredentials: false,
  });


  const onSussess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (err.message === ERROR_TYPES.NETWORK) {
      onNetworkError(ERROR_TYPES.NETWORK);
    }

    if (response) {
      if (response.status === ERROR_TYPES.BAD_REQUEST) {
        onNetworkError(ERROR_TYPES.BAD_REQUEST);
      }
    }

    throw err;
  };
  api.interceptors.response.use(onSussess, onFail);

  return api;
};
