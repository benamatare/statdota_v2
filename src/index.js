import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import { BrowserRouter as Router } from 'react-router-dom';

import reducer from './reducers/reducer.js'

import App from './App';

import './css/index.css';

  const store = createStore(reducer, compose(applyMiddleware(thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f
   ))

   console.log(store.getState());

ReactDOM.render(
  <Provider store={ store }>
      <App/>
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
