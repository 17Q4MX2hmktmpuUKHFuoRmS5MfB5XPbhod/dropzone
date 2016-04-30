/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, hashHistory } from 'react-router';

import dropzoneApp from './reducers'

// Routes
import Routes from './common/components/Routes';

// Base styling
import './common/base.css';

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

let store = createStore(dropzoneApp)

// Render the router
ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      {Routes}
    </Router>
  </Provider>
), document.getElementById(DOM_APP_EL_ID));

