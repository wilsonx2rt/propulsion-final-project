import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { tokens } from './reducers/tokens';
import { dropdowns } from './reducers/dropdowns';
import { project_details } from './reducers/project_details';
import { projectOverview } from './reducers/projectOverview';
import { managerOverview } from './reducers/managerOverview';
import { filter } from './reducers/filter';
import { project_milestones } from './reducers/project_milestones';
import { project_dependencies } from './reducers/project_dependencies';
import { yearly_forecasts } from './reducers/yearly_forecasts';
import { project_allocations } from './reducers/project_allocations';
import { managerDetails } from './reducers/managerDetails';
import { currentUser } from './reducers/currentUser';
import { LOG_OUT } from './constants';

const middleware = [thunk];

const rootReducer = (state, action) => {
  if(action.type === LOG_OUT) {
    state = undefined;
  }
  return reducer(state, action);
}

const reducer = combineReducers({
  tokens,
  dropdowns,
  project_details,
  projectOverview,
  managerOverview,
  filter,
  project_milestones,
  project_dependencies,
  yearly_forecasts,
  project_allocations,
  managerDetails,
  currentUser
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
