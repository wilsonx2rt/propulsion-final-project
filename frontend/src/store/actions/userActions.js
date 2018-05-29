import { getTokens } from './getTokens';
import { AUTHORIZE_USER, LOG_OUT } from '../constants';
import alertify from 'alertify.js';

export const loginAction = (localState, props) => {
  return (dispatch, getState) => {
    if (
      !localState.formPayload.username.value ||
      !localState.formPayload.password.value
    ) {
      alertify.alert('Benutzername und Passwort sind erforderlich');
      return;
    }
    getTokens(localState, props, dispatch, getState);
  };
};

export const setTokens = data => {
  return {
    type: AUTHORIZE_USER,
    payload: {
      data
    }
  };
};

export const logOutAction = props => {
  return (dispatch, getState) => {
    localStorage.clear();
    const action = setTokens({});
    dispatch(action);
    const logoutAction = {
      type: LOG_OUT,
    }
    dispatch(logoutAction);
    props.history.push('/login');
  };
};
