import { validateTokens } from "./validateTokens";
import { SERVER_URL, SET_PROJECT_ASSIGNMENT } from '../constants';

export const getProjectAssignmentAction = (props) => (dispatch, getState) => {
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
    return fetch(`${SERVER_URL}project_details/${project_id}/`, config);
  }
  )
  .then(response => {
    // console.log(response);
    return response.json()
  })
  .then(project_details => {
    // console.log(project_details);
    const action = setProjectAssignment(project_details);
    dispatch(action);
  })
}

const setProjectAssignment = (data) => {
  return {
    type: SET_PROJECT_ASSIGNMENT,
    payload: {
      data,
    }
  }
}