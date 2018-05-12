import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { tokens } from './reducers/tokens';

const reducer = combineReducers({
  tokens,

});


const store = createStore(reducer, applyMiddleware(thunk));

export default store;
