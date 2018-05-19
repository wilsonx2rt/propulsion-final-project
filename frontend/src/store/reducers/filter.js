import { SET_FILTER } from '../constants';

const initialState = {};

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filterString;
    }
    default:
      return state;
  }
};
