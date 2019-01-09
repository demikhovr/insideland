import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';

const app = (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(app, document.querySelector('.root'));
