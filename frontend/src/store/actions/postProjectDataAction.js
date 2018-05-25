import { validateTokens } from "./validateTokens";
import { SERVER_URL } from "../constants";
import { getProjectDetailsAction } from './getProjectDetailsAction';

export const postProjectDataAction = (props, body, method, project_id) => (dispatch, getState) => {
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
    if (method === 'PATCH' && props.currentUser.user_profile.isAdmin) url = `${SERVER_URL}project_data/${project_id}/`;
    else if(method === 'PATCH' && !props.currentUser.user_profile.isAdmin) url=`${SERVER_URL}pm/project_data/${project_id}/`
    return fetch(url, config);
  })
  .then(response => {
    if (response.ok) {
      dispatch(getProjectDetailsAction(props));
    }
  })
  
}
