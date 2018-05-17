import { SET_PROJECT_DETAILS, SET_YEARLY_FORECAST } from '../constants';

const initialState = {}

export const project_details = (state=initialState, action) => {
  switch (action.type){
    case SET_PROJECT_DETAILS: {
      // console.log('rrrrrrrrrrr',action.payload);
      return action.payload.project_details;
    }
    default:
      return state;
  }
}