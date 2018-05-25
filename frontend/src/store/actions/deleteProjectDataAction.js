import { validateTokens } from './validateTokens';
import { setProjectOverview } from './fetchProjectOverview';

import { SERVER_URL } from '../constants';

export const deleteProjectDataAction = (props, state) => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props)
    .then(response => {
      const headers = {
        Authorization: `Bearer ${getState().tokens.access}`,
      };
      const config = {
        method: 'DELETE',
        headers
      };
      const id = props.match.params.project_id;
      return fetch(`${SERVER_URL}project_data/${id}/`, config);
    })
    .then(response => {
      // ensure that last project is not renderd in overview after redirect
      dispatch(setProjectOverview({}));
      response.ok ? props.history.push('/overview') : alert('Error');
    });
};
