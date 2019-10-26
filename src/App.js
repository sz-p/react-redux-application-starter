import React from 'react';
import './App.css';

import IndexPage from './pages/index/index';
import AboutPage from './pages/about/about';

import { hot } from 'react-hot-loader'

import reducer from './reducers/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter, Route } from 'react-router-dom';

let store;
if (process.env.NODE_ENV === 'production') {
  store = createStore(reducer, applyMiddleware(promiseMiddleware));
} else {
  store = createStore(reducer, composeWithDevTools(applyMiddleware(promiseMiddleware)));
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div id='container'>
          <Route path={'/about'} component={AboutPage} />
          <Route exact path={'/'} component={IndexPage} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default hot(module)(App);
