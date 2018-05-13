import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import LoginForm from '../../Components/LoginForm';
import { hideNavBar } from '../../helpers';

class Login extends Component {

  componentDidMount = () => {
    hideNavBar();
  }

  render() {
    return (
      <div className='login-loginform-container'>
        <LoginForm />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {

  }
}

export default connect(mapStateToProps)(Login)