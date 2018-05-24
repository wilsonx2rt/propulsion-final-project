import { validateTokens } from "./validateTokens";
import { SET_PROJECT_MILESTONES } from '../constants';

export const getProjectMilestonesAction = (props, url) => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props)
  .then(response => {
    const headers = ({
      Authorization: `Bearer ${getState().tokens.access}`,
    });
    const config = {
      method: 'GET',
      headers,
    }
    return fetch(url, config);
  }
  )
  .then(response => {
    // console.log(response);
    return response.json()
  })
  .then(project_milestones => {
    // console.log(project_milestones);
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