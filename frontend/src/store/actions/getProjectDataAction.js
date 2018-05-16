import { validateTokens } from "./validateTokens";
import { SERVER_URL, SET_PROJECT_DATA } from '../constants';

export const getProjectDataAction = (props) => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props)
  .then(response => {
    const headers = ({
      Authorization: `Bearer ${getState().tokens.access}`,
    });
    const config = {
      method: 'GET',
      headers,
    }
    return fetch(SERVER_URL + 'project_details/1/', config);
  }
  )
  .then(response => {
    // console.log(response);
    return response.json()
  })
  .then(project_details => {
    // console.log(project_details);
    const action = setProjectData(project_details);
    dispatch(action);
  })
}

const setProjectData = (data) => {
  return {
    type: SET_PROJECT_DATA,
    payload: {
      data,
    }
  }
}