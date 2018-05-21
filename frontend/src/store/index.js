import { createStore, applyMiddleware, combineReducers } from 'redux';
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
  project_allocations
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
