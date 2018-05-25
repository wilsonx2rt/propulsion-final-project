import { SET_PROJECT_OVERVIEW } from '../constants';

const initialState = {};

export const projectOverview = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT_OVERVIEW: {
      return action.payload.projectOverview;
    }
    default:
      return state;
  }
};
