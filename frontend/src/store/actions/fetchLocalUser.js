import { setTokens } from './userActions';
import { SERVER_URL } from '../constants';
import {fetchCurrentUserActionCreator } from '../actions/fetchCurrentUser';

export const fetchLocalUser = () => (dispatch, getState) => {
  const tokensStr = localStorage.getItem('tokens');
  if (tokensStr) {
    let tokens = JSON.parse(tokensStr);
    dispatch(setTokens(tokens));
    dispatch(fetchCurrentUserActionCreator(tokens));
  }
};
