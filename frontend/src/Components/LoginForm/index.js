import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./index.css";

import { loginAction } from '../../store/actions/userActions';
// import Button from '../Button';
import GenericForm from '../GenericForm';
import { hideValidationMessage } from '../../helpers';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formPayload: {
      'form_settings': {type: 'login_form'},
      'username': {value: '', type: 'input', inputType: 'email', required: 'true', placeholder: 'Email'},
      'password': {value: '', type: 'input', inputType: 'password', required: 'true', placeholder: 'Kennwort'},
    }
  }
  }

  handleChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
  };

  handleSubmit = (e) => {
    e.preventDefault();
    hideValidationMessage();
    const action = loginAction(this.state, this.props);
    this.props.dispatch(action);
    document.querySelectorAll('.login-form')[0].reset();
  }

  render() {
    return (
      <div className="login-form-wrapper">
        <GenericForm 
          className='login-form'
          payload={ this.state.formPayload }
          onSubmit={ this.handleSubmit }
          updateParentState={ this.handleChange }
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps)(LoginForm));