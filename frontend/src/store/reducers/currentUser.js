import { SET_CURRENT_USER } from '../constants';

const initialState = {};

export const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return action.payload.currentUser;
    }
    default:
      return state;
  }
};
