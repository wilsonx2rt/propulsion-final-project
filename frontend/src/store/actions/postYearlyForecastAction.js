import { validateTokens } from "./validateTokens";
import { SERVER_URL } from "../constants";
import { getProjectDetailsAction } from './getProjectDetailsAction';

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
    if (method === 'PATCH') url = `${SERVER_URL}yearly_forecast/${forecast_id}/`
    else if (method === "POST") url = `${SERVER_URL}yearly_forecast/new/`
    console.log(config);
    return fetch(url, config);
  })
  .then(response => {
    console.log(response);
    if (response.ok) {
      dispatch(getProjectDetailsAction(props));
    }
  })
  
}
