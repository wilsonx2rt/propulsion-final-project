import { validateTokens } from "./validateTokens";
import { SET_YEARLY_FORECASTS } from '../constants';

export const getYearlyForecastAction = (props, url) => (dispatch, getState) => {
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
    // console.log(response);
    return response.json()
  })
  .then(yearly_forecasts => {
    // console.log(yearly_forecasts);
    const action = setYearlyForecasts(yearly_forecasts);
    dispatch(action);
  })
}

const setYearlyForecasts = (yearly_forecasts) => {
  return {
    type: SET_YEARLY_FORECASTS,
    payload: {
      yearly_forecasts,
    }
  }
}