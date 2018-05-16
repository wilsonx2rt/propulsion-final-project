import { SET_PROJECT_DATA } from '../constants';

const initialState = {
  'name': '',
  'radar_portfolio': {},
  'business_proposal': {},
  'project_type': {},
  'project_nature': {},
  'strategic_importance': {},
  'operational_urgency': {},
  'political_significance': {},
  'project_priority': {},
  'project_character': {},
  'control_cycle': {},
  'risk_assessment': {},
  'project_goal': {},
  'project_handbook': {},
  'project_handbook_file': {},
  'e3_number': {},
  'business_category': {},
  'service_nature': {},
  'invoiceability': {},
  'business_number': {},
  'project_status_phase': {},
  'comment': {},
}

export const project_data = (state=initialState, action) => {
  switch (action.type){
    case SET_PROJECT_DATA: {
      // console.log(action.payload.data);
      const newState = Object.assign({}, initialState);
      Object.keys(newState).map(key => {
        if(typeof action.payload.data[0][key] === 'object'){
          const objectCopy = Object.assign({}, action.payload.data[0][key]);
          newState[key] = objectCopy;
        }
        else{
          newState[key] = action.payload.data[0][key];
        }
      })
      // console.log(newState);
      return newState;
    }
    default:
      return state;
  }
}