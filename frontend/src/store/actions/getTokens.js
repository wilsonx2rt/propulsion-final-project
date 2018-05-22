import { setTokens } from './userActions'; 
import { SERVER_URL } from '../constants';
import { showValidationMessage } from '../../helpers';

export const getTokens = (localState, props, dispatch, getState) => {
  // console.log(localState);
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
      // console.log(response);
      return response.json()
    })
    .then(data => {
      if (data && data.access){
        console.log(data);
        const action = setTokens(data);
        dispatch(action);
        localStorage.setItem('tokens', JSON.stringify(data));
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