import { SET_MANAGER_DETAILS } from '../constants';

const initialState = {};

export const managerDetails = (state = initialState, action) => {
  switch (action.type) {
    case SET_MANAGER_DETAILS: {
      return action.payload.manager_details
    }
    default:
      return state;
  }
}