import React, { Component } from 'react';
import './index.css';
import LoginForm from '../../Components/LoginForm';
import { hideNavBar } from '../../helpers';

class RegistrationSuccess extends Component {
  componentDidMount = () => {
    hideNavBar();
  };

  render() {
    return (
      <div className="registration-success-container">
        <div className="login-loginform-container">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default RegistrationSuccess;
