import { setTokens } from './userActions'; 
import { SERVER_URL } from '../constants';
import { showValidationMessage } from '../../helpers';
import {fetchCurrentUserActionCreator } from '../actions/fetchCurrentUser';
import { showNavBar } from '../../helpers';

export const getTokens = (localState, props, dispatch, getState) => {
  if (!getState().tokens.access){
    const headers = new Headers({
      'content-type': 'application/json',
    })
    const body = {
      username: localState.formPayload.username.value,
      password: localState.formPayload.password.value,
    }
    const config = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headers,
    }
    fetch(SERVER_URL + 'auth/token/', config)
    .then(response => {
      return response.json()
    })
    .then(data => {
      if (data && data.access){
        const action = setTokens(data);
        dispatch(action);
        localStorage.setItem('tokens', JSON.stringify(data));
        dispatch(fetchCurrentUserActionCreator(data));
        // login page has navbar hidden, so let's show it.
        showNavBar();
        props.history.push('/overview');
      }
      else{
        showValidationMessage();
        // alert('Wrong username or password');
      }
    })
  }
  else {
    props.history.push('/overview')
  }
}