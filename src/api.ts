import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import {ERROR_TYPES} from "./const";


export const createApi = (onNetworkError : (error: string | number) => void) : AxiosInstance => {
  const api = axios.create({
    baseURL: `http://www.filltext.com`,
    timeout: 8000,
    withCredentials: false,
  });


  const onSussess = (response : AxiosResponse) => {
    return response;
  };

  const onFail = (err: AxiosError) => {
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
