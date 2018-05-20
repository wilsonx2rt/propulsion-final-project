import { SET_MANAGER_OVERVIEW } from '../constants';

const initialState = {};

export const managerOverview = (state = initialState, action) => {
  switch (action.type) {
    case SET_MANAGER_OVERVIEW: {
      // console.log(action.payload.managerOverview)
      return action.payload.managerOverview;
    }
    default:
      return state;
  }
};
