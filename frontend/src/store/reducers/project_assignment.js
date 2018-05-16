import { SET_PROJECT_ASSIGNMENT } from '../constants';

const initialState = {
  'project_responsibility': '',
  'overall_pm_team': '',
  'leading_role': '',
  'leading_team': '',
  'project_management': '',
  'planner_control': '',
  'construction_management': '',
  'illustrator': '',
  'communications': '',
  'id': '',
}

export const project_assignment = (state=initialState, action) => {
  switch (action.type){
    case SET_PROJECT_ASSIGNMENT: {
      // console.log(action.payload.data[0]);
      // console.log(action.payload.data[0].project_assignment);
      const newState = Object.assign({}, initialState);
      Object.keys(newState).map(key => {
        // console.log(key,typeof action.payload.data.project_assignment[key]);
        if(action.payload.data.project_assignment[key] !== null && typeof action.payload.data.project_assignment[key] === 'object'){
          
          const objectCopy = Object.assign({}, action.payload.data.project_assignment[key]);
          newState[key] = objectCopy;
        }
        else{
          newState[key] = action.payload.data.project_assignment[key];
        }
      })
      // console.log(newState);
      return newState;
    }
    default:
      return state;
  }
}