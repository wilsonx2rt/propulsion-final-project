import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { tokens } from './reducers/tokens';
import { dropdowns } from './reducers/dropdowns';
import { project_details } from './reducers/project_details';
import { projectOverview } from './reducers/projectOverview';
import { managerOverview } from './reducers/managerOverview';
import { filter } from './reducers/filter';
import { project_milestones } from './reducers/project_milestones';
import { managerDetails } from './reducers/managerDetails';
import { currentUser } from './reducers/currentUser';

const middleware = [thunk];

const reducer = combineReducers({
  tokens,
  dropdowns,
  project_details,
  projectOverview,
  managerOverview,
  filter,
  project_milestones,
  managerDetails,
  currentUser
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
