import { validateTokens } from "./validateTokens";
import { SERVER_URL } from "../constants";
import { getProjectDetailsAction } from './getProjectDetailsAction';
import alertify from 'alertify.js';

export const postProjectFinancesAction = (props, body, method, finances_id) => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props)
  .then(response => {
    const headers = ({
      Authorization: `Bearer ${getState().tokens.access}`,
      'content-type': 'application/json',
    });
    const config = {
      method,
      headers,
      body: JSON.stringify(body),
    }
    let url;
    if (method === 'PATCH' && props.currentUser.user_profile.isAdmin) url = `${SERVER_URL}project_finances/${finances_id}/`
    else if (method === "POST" && props.currentUser.user_profile.isAdmin) url = `${SERVER_URL}project_finances/new/`
    return fetch(url, config);
  })
  .then(response => {
    if (response.ok) {
      dispatch(getProjectDetailsAction(props));
      dispatch(getProjectDetailsAction(props));
      alertify.delay(3000).success('Erfolgreich gespeichert');
    } else {
      alertify.delay(3000).error('Es ist ein Fehler aufgetreten. Versuchen Sie es erneut.')
    }
  })
  
}
