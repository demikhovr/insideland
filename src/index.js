import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.querySelector('.root'));
serviceWorker.unregister();
