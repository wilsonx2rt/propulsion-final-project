import { SET_DROPDOWNS } from '../constants';

export const dropdowns = (state={}, action) => {
  switch(action.type){
    case SET_DROPDOWNS: {
      return action.payload.dropdowns;
    }
    default:
      return state;
  }
}