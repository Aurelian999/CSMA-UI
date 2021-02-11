import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { rootStore, StoreProvider } from './stores/StoreContext';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

ReactDOM.render(
  <StoreProvider store={rootStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
