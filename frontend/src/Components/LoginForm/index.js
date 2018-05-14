import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./index.css";

import { loginAction } from '../../store/actions/userActions';
import Button from '../Button';
import GenericForm from '../GenericForm';
import { hideValidationMessage } from '../../helpers';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'form_settings': {type: 'login_form'},
      'username': {value: '', type: 'input', inputType: 'email', required: 'true', placeholder: 'Email'},
      'password': {value: '', type: 'input', inputType: 'password', required: 'true', placeholder: 'Kennwort'},
    };
  }

  handleChange = input_array => {
    this.state[input_array[0]].value = input_array[1];
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
        <GenericForm 
          className='login-form'
          payload={ this.state }
          onSubmit={ this.handleSubmit }
          updateParentState={ this.handleChange }
        />
        {/* <form id="login-form" onSubmit={ this.handleSubmit } noValidate>
          <p className='login-form__validation-message generic-validation-message hidden-element'>Ungültiger Benutzername oder Kennwort</p>
          <input
            className="login-form__input"
            type="email"
            name="username"
            placeholder="Email"
            onChange={this.handleChange}
            value={ this.state.username }
          />
          <input
            className="login-form__input"
            type="password"
            name="password"
            placeholder="Kennwort"
            onChange={this.handleChange}
            value={ this.state.password }
          />
          <Button 
            id="login-form__button" 
            btnText="Login" 
            type='submit'
          />
        </form> */}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps)(LoginForm));