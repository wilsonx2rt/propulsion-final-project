import React, { Component } from 'react';

import alertify from 'alertify.js';

import './index.css';
import Button from '../Button';
import { withRouter } from 'react-router-dom';

import { SERVER_URL } from '../../store/constants';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      code: '',
      password: '',
      password_repeat: ''
    };
  }

  componentDidMount = () => {
    this.setState({
      email: this.props.email,
      code: this.props.code
    });
  };

  handleClick = () => {
    const headers = {
      'Content-Type': 'application/json'
    };
    const content = {
      email: this.state.email,
      code: this.state.code,
      password: this.state.password,
      password_repeat: this.state.password_repeat
    };
    const config = {
      method: 'Post',
      headers,
      body: JSON.stringify(content)
    };
    this.state.password === this.state.password_repeat
      ? fetch(`${SERVER_URL}registration/validation/`, config).then(
          response =>
            response.ok
              ? this.props.history.push(`/registration-success/`)
              : alertify.alert(' Registrierung fehlgeschlagen')
        )
      : alertify.alert('Passwörter nicht übereinstimmen');
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="registration-page-container">
        <div className="registration-form">
          <div className="registration__input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              className="registration__input"
              type="email"
              id="email"
              value={this.state.email}
              disabled="true"
            />
          </div>
          <div className="registration__input-wrapper">
            <label htmlFor="validation-code">Code</label>
            <input
              className="registration__input"
              type="text"
              id="validation-code"
              value={this.state.code}
              disabled="true"
            />
          </div>
          <div className="registration__input-wrapper" id="password-wrapper">
            <label htmlFor="password">Password</label>
            <input
              className="registration__input"
              onChange={this.handleChange}
              type="password"
              id="password"
            />
          </div>
          <div
            className="registration__input-wrapper"
            id="password-repeat-wrapper"
          >
            <label htmlFor="password">Password Repeat</label>
            <input
              className="registration__input"
              onChange={this.handleChange}
              type="password"
              id="password_repeat"
            />
          </div>
          <div className="button-wrapper">
            <Button
              className="generic-form__button"
              handleClick={this.handleClick}
              btnText="Registrieren"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegistrationForm);
