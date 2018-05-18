import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { tokens } from './reducers/tokens';
import { dropdowns } from './reducers/dropdowns';
import { project_details } from './reducers/project_details';
import { projectOverview } from './reducers/projectOverview';
import { managerOverview } from './reducers/managerOverview';
import { filter } from './reducers/filter';

const reducer = combineReducers({
  tokens,
  dropdowns,
  project_details,
  projectOverview,
  managerOverview,
  filter
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
