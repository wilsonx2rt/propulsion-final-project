import React, { Component } from 'react';
import './index.css';
import { hideNavBar } from '../../helpers';
import RegistrationForm from '../../Components/RegistrationForm';

class Registration extends Component {
  
  componentDidMount = () => {
    hideNavBar();
  }

  render() {
    return (
      <div>
        <h1>Registration Page MF</h1>
        <RegistrationForm />
      </div>
    )
  }
}

export default Registration;
