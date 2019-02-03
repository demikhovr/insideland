import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import 'normalize.css';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import rootReducer from './store/reducers/rootReducer';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

const app = (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

ReactDOM.render(app, document.querySelector('.root'));
