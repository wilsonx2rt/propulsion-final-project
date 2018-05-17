import { validateTokens } from "./validateTokens";
import { SERVER_URL, SET_PROJECT_MILESTONES } from '../constants';

export const getProjectMilestonesAction = (props) => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props)
  .then(response => {
    const headers = ({
      Authorization: `Bearer ${getState().tokens.access}`,
    });
    const config = {
      method: 'GET',
      headers,
    }
    const project_id = props.project_id;
    return fetch(`${SERVER_URL}project_milestones/milestones/${project_id}/`, config);
  }
  )
  .then(response => {
    // console.log(response);
    return response.json()
  })
  .then(project_milestones => {
    // console.log(project_details);
    const action = setProjectMilestones(project_milestones);
    dispatch(action);
  })
}

const setProjectMilestones = (project_milestones) => {
  return {
    type: SET_PROJECT_MILESTONES,
    payload: {
      project_milestones,
    }
  }
}