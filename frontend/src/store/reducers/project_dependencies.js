import { SET_PROJECT_DEPENDENCIES } from '../constants';

export const project_dependencies = (state={}, action) => {
  switch (action.type){
    case SET_PROJECT_DEPENDENCIES: {
      return action.payload.project_dependencies;
    }
    default: 
      return state;
  }
}