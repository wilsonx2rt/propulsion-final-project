import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import Home from './Router';
import { fetchLocalUser } from './store/actions/fetchLocalUser';

store.dispatch(fetchLocalUser());
// TODO remove all the comments and console.logs from the code. 
ReactDOM.render(
  <Provider store={ store }>
    <Home />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
