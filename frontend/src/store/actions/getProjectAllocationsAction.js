import { validateTokens } from "./validateTokens";
import { SET_PROJECT_ALLOCATIONS } from '../constants';

export const getProjectAllocationsAction = (props, url) => (dispatch, getState) => {
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
    return response.json()
  })
  .then(project_allocations => {
    const action = setProjectAllocations(project_allocations);
    dispatch(action);
  })
}

const setProjectAllocations = (project_allocations) => {
  return {
    type: SET_PROJECT_ALLOCATIONS,
    payload: {
      project_allocations,
    }
  }
}