import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./index.css";

import { loginAction } from '../../store/actions/userActions';
import Button from '../Button';
import { hideValidationMessage } from '../../helpers';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    hideValidationMessage();
    const action = loginAction(this.state, this.props);
    this.props.dispatch(action);
    document.querySelector('#login-form').reset();
  }

  render() {
    return (
      <div className="login-form-wrapper">
        <form id="login-form" onSubmit={ this.handleSubmit } noValidate>
          <p className='login-form__validation-message generic-validation-message hidden-element'>Ungültiger Benutzername oder Kennwort</p>
          <input
            className="login-form__input"
            type="email"
            name="username"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            className="login-form__input"
            type="password"
            name="password"
            placeholder="Kennwort"
            onChange={this.handleChange}
          />
          <Button 
            id="login-form__button" 
            btnText="Login" 
            type='submit'
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps)(LoginForm));