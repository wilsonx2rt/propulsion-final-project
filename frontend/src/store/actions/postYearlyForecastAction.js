import { validateTokens } from "./validateTokens";
import { SERVER_URL } from "../constants";
import { getProjectDetailsAction } from './getProjectDetailsAction';
import alertify from 'alertify.js';

export const postYearlyForecastAction = (props, body, method, forecast_id) => (dispatch, getState) => {
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
    if (method === 'PATCH') url = `${SERVER_URL}yearly_forecasts/${forecast_id}/`
    else if (method === "POST") url = `${SERVER_URL}yearly_forecasts/new/`
    return fetch(url, config);
  })
  .then(response => {
    if (response.ok) {
      dispatch(getProjectDetailsAction(props));
      alertify.delay(3000).success('Erfolgreich gespeichert');
    } else {
      alertify.delay(3000).error('Es ist ein Fehler aufgetreten. Versuchen Sie es erneut.')
    }
  })
}
