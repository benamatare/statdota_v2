import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { rootReducer } from './reducer.js'

import App from './App';

import './css/index.css';

  const store = createStore(rootReducer, compose(applyMiddleware(thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f
   ))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
