import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm';
import { hideNavBar } from '../../helpers';

class RegistrationSuccess extends Component {

  componentDidMount = () => {
    hideNavBar();
  };

  render() {
    return (
      <div>
        <h1>Success</h1>
        <div className='login-loginform-container'>
        <LoginForm />
      </div>
      </div>
    )
  }
}

export default RegistrationSuccess;
