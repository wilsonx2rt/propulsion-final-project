import { SERVER_URL, SET_PROJECT_OVERVIEW } from '../constants';
import { validateTokens } from './validateTokens';
import { projectOverview } from '../reducers/projectOverview';
import { fetchCurrentUserActionCreator } from './fetchCurrentUser';

export const fetchProjectOverviewActionCreator = (state, props) => (
  dispatch,
  getState
) => {
  console.log('hola');
  validateTokens(getState(), dispatch, props)
    .then(response => {
      const headers = {
        Authorization: `Bearer ${getState().tokens.access}`
      };
      const config = {
        method: 'GET',
        headers
      };
      let filter;
      // Prevent error on first dispatch of action during render!
      // Set filter string for dispatch on form submit
      props && state.filterString
        ? (filter = state.filterString)
        : (filter = '');
      // fetch to right endpoint depending on isAdmin status
      let URL =
        props && props.currentUser && props.currentUser.user_profile.isAdmin === true
          ? `${SERVER_URL}overview/projects/?filter=${filter}`
          : `${SERVER_URL}pm/overview/`;
      return fetch(URL, config);
    })
    .then(response => {
      return response.json();
    })
    .then(projectOverview => {
      const action = setProjectOverview(projectOverview);
      dispatch(action);
    });
};

export const setProjectOverview = projectOverview => {
  return {
    type: SET_PROJECT_OVERVIEW,
    payload: {
      projectOverview
    }
  };
};
