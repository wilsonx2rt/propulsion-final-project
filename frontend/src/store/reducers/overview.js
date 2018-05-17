import { SET_OVERVIEW } from '../constants';

const initialState = {}

export const overview = (state=initialState, action) => {
  switch (action.type){
    case SET_OVERVIEW: {
      console.log('from overview reducer');
      return action.payload.overview;
    }
    default:
      return state;
  }
}