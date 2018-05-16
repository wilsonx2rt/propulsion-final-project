import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { tokens } from './reducers/tokens';
import { dropdowns } from './reducers/dropdowns';
import { project_data } from './reducers/project_data';
import { project_assignment } from './reducers/project_assignment';

const reducer = combineReducers({
  tokens,
  dropdowns,
  project_data,
  project_assignment,
});


const store = createStore(reducer, applyMiddleware(thunk));

export default store;
