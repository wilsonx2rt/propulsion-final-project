import { logOutAction, setTokens } from './userActions';
import { SERVER_URL } from '../constants';

export const validateTokensAction = (props) => (dispatch, getState) => {
  validateTokens(getState(), dispatch, props);
}

export const validateTokens = (state, dispatch, props) => {
  if (!state.tokens.access) {
    dispatch(logOutAction);
  }
  const access = state.tokens.access;
  //checking access token for validity
  const accessBody = {
    token: access,
  };
  const accessHeaders = new Headers({
    'content-type': 'application/json',
  });
  const accessConfig = {
    method: 'POST',
    body: JSON.stringify(accessBody),
    headers: accessHeaders,
  }
  const refreshHeaders = new Headers({
    'content-type': 'application/json',
  });
  return fetch(SERVER_URL + 'auth/token/verify/', accessConfig)
    .then(response => {
      if(!response.ok){
        // checking refresh token
        const refresh = state.tokens.refresh;
        let refreshBody = {
          token: refresh,
        };  
        const refreshConfig = {
          method: 'POST',
          body: JSON.stringify(refreshBody),
          headers: refreshHeaders,
        };
        return fetch(SERVER_URL + 'auth/token/verify/', refreshConfig);
      }
      return;
    })
    .then(response => {
      if (response === undefined) {
        return;
      }
      if (response.status===200){
        const refreshBody = {
          refresh: state.tokens.refresh,
        }
        const refreshConfig = {
          method: 'POST',
          body: JSON.stringify(refreshBody),
          headers: refreshHeaders,
        };
        return fetch(SERVER_URL + 'auth/token/refresh/', refreshConfig);
      }
      else {
        console.log('Logging out!');
        dispatch(logOutAction(props));
        return;
      }
    })
    .then(response => {
      if (response === undefined) {
        return;
      }
      return response.json()
    })
    .then(data => {
      if (data === undefined) {
        return;
      }
      const tokens = {
        refresh: state.tokens.refresh,
        access: data.access, 
      }
      const action = setTokens(tokens);
      dispatch(action);
      localStorage.setItem('tokens', JSON.stringify(tokens));
    })
}