import { SERVER_URL, SET_MANAGER_OVERVIEW } from '../constants';
import { validateTokens } from './validateTokens';

export const fetchManagerOverviewActionCreator = props => (
  dispatch,
  getState
) => {
  validateTokens(getState(), dispatch, props)
    .then(response => {
      const headers = {
        Authorization: `Bearer ${getState().tokens.access}`
      };
      const config = {
        method: 'GET',
        headers
      };
      return fetch(`${SERVER_URL}overview/managers/`, config);
    })
    .then(response => {
      return response.json();
    })
    .then(managerOverview => {
      const action = setManagerOverview(managerOverview);
      dispatch(action);
    });
};

const setManagerOverview = managerOverview => {
  return {
    type: SET_MANAGER_OVERVIEW,
    payload: {
      managerOverview
    }
  };
};
