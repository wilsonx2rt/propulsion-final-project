import { SERVER_URL , SET_DROPDOWNS } from '../constants';
import { validateTokens } from './validateTokens';

export const fetchDropdownsActionCreator = (props) => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props)
  .then(response => {
    const headers = ({
      Authorization: `Bearer ${getState().tokens.access}`,
    });
    const config = {
      method: 'GET',
      headers,
    }
    return fetch(`${SERVER_URL}dropdowns/`, config);
  })
  .then(response => {
    // console.log(response);
    return response.json();
  })
  .then(dropdowns => {
    // console.log('DDDDDDDDDDDRRRRRRRRRRR', dropdowns);
    const action = setDropdowns(dropdowns);
    dispatch(action);
  })
}

const setDropdowns = dropdowns => ({
  type: SET_DROPDOWNS,
  payload: {
    dropdowns,
  }
})