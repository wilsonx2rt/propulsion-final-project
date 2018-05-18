import { SET_PROJECT_MILESTONES } from '../constants';

const initialState = {}

export const project_milestones = (state=initialState, action) => {
  switch (action.type){
    case SET_PROJECT_MILESTONES: {
      // console.log('rrrrrrrrrrr',action.payload);
      return action.payload.project_milestones;
    }
    default:
      return state;
  }
}