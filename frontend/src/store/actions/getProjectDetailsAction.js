import { validateTokens } from "./validateTokens";
import { SERVER_URL, SET_PROJECT_DETAILS } from '../constants';
import { getYearlyForecastAction } from './getYearlyForecastAction';
import { fetchManagerOverviewActionCreator } from './fetchManagerOverview';
import { fetchCurrentUserActionCreator } from './fetchCurrentUser';

export const getProjectDetailsAction = (props) => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props)
  .then (response => {
    return dispatch(fetchCurrentUserActionCreator)
  })
  .then(response => {
    const headers = ({
      Authorization: `Bearer ${getState().tokens.access}`,
    });
    const config = {
      method: 'GET',
      headers,
    }
    const project_id = props.match.params.project_id;
    return fetch(`${SERVER_URL}project_details/${project_id}/`, config);
  }
  )
  .then(response => {
    return response.json()
  })
  .then(project_details => {
    const action = setProjectDetails(project_details);
    dispatch(action);
    dispatch(fetchManagerOverviewActionCreator(props));
    if(project_details.project_finances){
      const fetchURL = `${SERVER_URL}yearly_forecasts/forecasts/${project_details.project_finances.id}/`;
      const action = getYearlyForecastAction(props, fetchURL);
      dispatch(action);
    }
  })
}

const setProjectDetails = (project_details) => {
  return {
    type: SET_PROJECT_DETAILS,
    payload: {
      project_details,
    }
  }
}