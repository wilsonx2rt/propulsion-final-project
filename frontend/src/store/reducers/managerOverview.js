import { SET_PROJECT_MANAGER } from '../constants';

const initialState = {};

export const managerOverview = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT_MANAGER: {
      // console.log(action.payload.managerOverview)
      return action.payload.managerOverview;
    }
    default:
      return state;
  }
};
