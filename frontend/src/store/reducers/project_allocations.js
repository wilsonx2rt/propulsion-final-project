import { SET_PROJECT_ALLOCATIONS } from '../constants';

const initialState = {
  // 'year': '',
  // 'quarter': '',
  // 'project_phase': '',
  // 'project_responsibility': '',
  // 'overall_pm_team__allocation': '',
  // 'project_management_allocation': '',
  // 'planner_control_allocation': '',
  // 'construction_management_allocation': '',
  // 'illustrator_allocation': '',
  // 'supplementary_construction_management_allocation': '',
  // 'communications_allocation': '',
  // 'total_allocation': '',
}

export const project_allocations = (state=initialState, action) => {
  switch (action.type){
    case SET_PROJECT_ALLOCATIONS: {
      // console.log(action.payload.data);
      // console.log(action.payload.data[0].project_allocations);
      // const newState = Object.assign({}, initialState);
      // action.payload.data[0].project_allocations.map(allocation => {

      // })
      // Object.keys(newState).map(key => {
      //   // console.log(key,typeof action.payload.data.project_allocation[key]);
      //   if (action.payload.data[0].project_allocations[key] !== null && action.payload.data[0].project_allocations[key] !== undefined){
      //     if(typeof action.payload.data[0].project_allocations[key] === 'object'){
      //       const objectCopy = Object.assign({}, action.payload.data[0].project_allocations[key]);
      //       newState[key] = objectCopy;
      //     }
      //     else{
      //       newState[key] = action.payload.data[0].project_allocations[key];
      //     }

      //   }
      // })
      // console.log(newState);
      // return newState;
      return action.payload.data.project_allocations;
    }
    default:
      return state;
  }
}