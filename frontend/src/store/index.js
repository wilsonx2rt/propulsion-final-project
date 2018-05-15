import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { tokens } from './reducers/tokens';
import { dropdowns } from './reducers/dropdowns';

const reducer = combineReducers({
  tokens,
  dropdowns,
});


const store = createStore(reducer, applyMiddleware(thunk));

export default store;
