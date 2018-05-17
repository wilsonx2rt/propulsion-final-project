import { SERVER_URL, SET_PROJECT_OVERVIEW } from '../constants';
import { validateTokens } from './validateTokens';
import { projectOverview } from '../reducers/projectOverview';

export const fetchProjectOverviewActionCreator = props => (
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
      return fetch(`${SERVER_URL}overview/projects/`, config);
    })
    .then(response => {
      // console.log(response);
      return response.json();
    })
    .then(projectOverview => {
      // console.log("from the fetch overviews", overview);
      const action = setProjectOverview(projectOverview);
      dispatch(action);
    });
};

const setProjectOverview = projectOverview => {
  return {
    type: SET_PROJECT_OVERVIEW,
    payload: {
      projectOverview
    }
  };
};
