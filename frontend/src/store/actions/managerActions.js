import { SERVER_URL, SET_MANAGER_DETAILS } from '../constants';
import { validateTokens } from './validateTokens';
import { fetchManagerOverviewActionCreator } from '../../store/actions/fetchManagerOverview';


export const fetchManagerActionCreator = props => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props)
    .then(response => {
      const headers = {
        Authorization: `Bearer ${getState().tokens.access}`
      };
      const config = {
        method: 'GET',
        headers
      };
      const managerId = props.match.params.manager_id;
      return fetch(`${SERVER_URL}user/${managerId}/`, config);
    })
    .then(response => response.json())
    .then(manager_details => {
      const action = setManagerDetails(manager_details);
      dispatch(action);
    });
};

export const updateManagerActionCreator = (state, props) => (
  dispatch,
  getState
) => {
  validateTokens(getState(), dispatch, props)
    .then(response => {
      const headers = {
        Authorization: `Bearer ${getState().tokens.access}`,
        'Content-Type': 'application/json'
      };
      const content = {
        first_name: state.first_name.value,
        last_name: state.last_name.value,
        email: state.email.value
      };
      const config = {
        method: 'PATCH',
        headers,
        body: JSON.stringify(content)
      };
      const managerId = props.managerDetails.id;
      return fetch(`${SERVER_URL}user/${managerId}/`, config);
    })
    .then(response => response.json())
    .then(manager_details => {
      let action = setManagerDetails(manager_details);
      dispatch(action);
      action = fetchManagerOverviewActionCreator(this.props);
      dispatch(action);
    });
};

const setManagerDetails = manager_details => {
  return {
    type: SET_MANAGER_DETAILS,
    payload: {
      manager_details
    }
  };
};
