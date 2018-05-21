import { SET_PROJECT_ALLOCATIONS } from '../constants';

export const project_allocations = (state={}, action) => {
  switch (action.type){
    case SET_PROJECT_ALLOCATIONS: {
      // console.log('rrrrrrrrrrr',action.payload);
      return action.payload.project_allocations;
    }
    default:
      return state;
  }
}