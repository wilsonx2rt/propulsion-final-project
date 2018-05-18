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
      let filter;
      // Prevent error on first dispatch of action during render!
      if (props.state) {
      }
      // Set filter string for dispatch on form submit
      props.state && props.state.filter ? (filter = props.state.filter) : (filter = '');
      console.log(filter);
      return fetch(`${SERVER_URL}overview/projects/?filter=${filter}`, config);
    })
    .then(response => {
      return response.json();
    })
    .then(projectOverview => {
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
