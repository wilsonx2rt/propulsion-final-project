import { SERVER_URL } from '../constants';
import { validateTokens } from './validateTokens';
import { fetchProjectOverviewActionCreator } from './fetchProjectOverview';

export const createNewProjectActionCreator = (state, props) => (dispatch, getState) => {
  console.log(state);
  validateTokens(getState(), dispatch, props)
  .then(response => {
    const headers = {
      Authorization: `Bearer ${getState().tokens.access}`,
      'Content-Type': 'application/json'
    };
    const content = {
      name: state.newProjectName
    };
    const config = {
      method: 'POST',
      headers,
      body: JSON.stringify(content)
    };
    return fetch(`${SERVER_URL}project_data/new/`, config);
  })
  .then(response => {
    response.status === 201
      ? console.log('project created')
      : alert('Error');
    let action = fetchProjectOverviewActionCreator(state,props);
    dispatch(action);
  })
}