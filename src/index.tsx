import React from 'react';
import {createGlobalStyle} from 'styled-components';
import ReactDOM from 'react-dom';
import App from './blocks/app/app';
import reportWebVitals from './reportWebVitals';
import {createApi} from './api';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer, ActionCreator} from './reducer';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }
`;

const onNetworkError = (error: string | number) => {
  store.dispatch(ActionCreator.setError(error));
};

const api = createApi(onNetworkError);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
    )
);

ReactDOM.render(
    <React.StrictMode>
      <React.Fragment>
        <GlobalStyle />
        <Provider store = {store}>
          <App />
        </Provider>
      </React.Fragment>
    </React.StrictMode>,
    document.getElementById(`root`)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
