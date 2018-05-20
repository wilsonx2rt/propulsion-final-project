import { SET_CURRENT_USER, SERVER_URL } from '../constants';
// Keep track of current user/profile on every page loag

export const fetchCurrentUserActionCreator = tokens => dispatch => {
  const headers = {
    Authorization: `Bearer ${tokens.access}`
  };
  const config = {
    method: 'GET',
    headers
  };
  fetch(`${SERVER_URL}user/`, config)
    .then(response => response.json())
    .then(currentUser => {
      const action = setCurrentUser(currentUser);
      dispatch(action);
    });
}

const setCurrentUser = currentUser => {
  return {
    type: SET_CURRENT_USER,
    payload: {
      currentUser
    }
  };
};
