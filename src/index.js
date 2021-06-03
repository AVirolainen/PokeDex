import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import{ createStore }from'redux';
import{ Provider }from'react-redux';

import reportWebVitals from './reportWebVitals';
import configureStore from "./store/configureStore.js"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);




reportWebVitals();
