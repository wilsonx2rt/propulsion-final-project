import { SERVER_URL } from '../constants';
import { validateTokens } from './validateTokens';
import { fetchProjectOverviewActionCreator } from './fetchProjectOverview';
import alertify from 'alertify.js';

export const createNewProjectActionCreator = (state, props) => (dispatch, getState) => {
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
      ? null
      : alertify.alert('Das Projekt wurde nicht erstellt. Bitte versuchen Sie es erneut.');
    let action = fetchProjectOverviewActionCreator(state,props);
    dispatch(action);
  })
}