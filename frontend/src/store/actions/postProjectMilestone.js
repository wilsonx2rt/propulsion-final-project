import { validateTokens } from "./validateTokens";
import { SERVER_URL } from "../constants";
import { getProjectDetailsAction } from './getProjectDetailsAction';
import { getProjectMilestonesAction } from './getProjectMilestonesAction';

export const postProjectMilestone = (props, body, method, milestone_id) => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props)
  .then(response => {
    const headers = ({
      Authorization: `Bearer ${getState().tokens.access}`,
      'content-type': 'application/json',
    });
    const config = {
      method,
      headers,
      body: JSON.stringify(body),
    }
    let url;
    if (method === 'PATCH') url = `${SERVER_URL}project_milestones/${milestone_id}/`
    else if (method === "POST") url = `${SERVER_URL}project_milestones/new/`
    console.log(config);
    return fetch(url, config);
  })
  .then(response => {
    console.log(response);
    if (response.ok) {
      const fetchURL = `${SERVER_URL}project_milestones/milestones/${props.project_id}/`
      dispatch(getProjectDetailsAction(props));
      dispatch(getProjectMilestonesAction(props, fetchURL));
    }
  })
  
}
