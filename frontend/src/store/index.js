import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { tokens } from './reducers/tokens';
import { dropdowns } from './reducers/dropdowns';
import { project_details } from './reducers/project_details';

const reducer = combineReducers({
  tokens,
  dropdowns,
  project_details,
});


const store = createStore(reducer, applyMiddleware(thunk));

export default store;
