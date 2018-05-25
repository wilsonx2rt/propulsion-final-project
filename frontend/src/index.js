import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import Home from './Router';
import { fetchLocalUser } from './store/actions/fetchLocalUser';

store.dispatch(fetchLocalUser());
ReactDOM.render(
  <Provider store={ store }>
    <Home />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
