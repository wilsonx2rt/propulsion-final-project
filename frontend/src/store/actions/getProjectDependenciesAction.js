import { validateTokens } from "./validateTokens";
import { SET_PROJECT_DEPENDENCIES } from '../constants';

export const getProjectDependenciesAction = (props, url) => (dispatch, getState) => {
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
  .then(project_dependencies => {
    // console.log(project_dependencies);
    const action = setProjectDependencies(project_dependencies);
    dispatch(action);
  })
}

const setProjectDependencies = (project_dependencies) => {
  return {
    type: SET_PROJECT_DEPENDENCIES,
    payload: {
      project_dependencies,
    }
  }
}