import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { tokens } from './reducers/tokens';
import { dropdowns } from './reducers/dropdowns';
import { project_details } from './reducers/project_details';
import { project_milestones } from './reducers/project_milestones';

const reducer = combineReducers({
  tokens,
  dropdowns,
  project_details,
  project_milestones,
});


const store = createStore(reducer, applyMiddleware(thunk));

export default store;
