import { setTokens } from './userActions'; 
import { SERVER_URL } from '../constants';
import { showValidationMessage } from '../../helpers';

export const getTokens = (body, props, dispatch, getState) => {
  console.log(getState().tokens.access);
  if (!getState().tokens.access){
    const headers = new Headers({
      'content-type': 'application/json',
    })
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
        props.history.push('/');
      }
      else{
        showValidationMessage();
        // alert('Wrong username or password');
      }
    })
  }
  else {
    props.history.push('/')
  }
}