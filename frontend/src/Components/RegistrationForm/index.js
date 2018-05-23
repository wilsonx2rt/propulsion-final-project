import React, { Component } from 'react';
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
      ? fetch(`${SERVER_URL}registration/validation/`, config).then(response =>
          response.ok ? this.props.history.push(`/registration-success/`) : alert(' Registrierung fehlgeschlagen')
        )
      : alert('Passwörter nicht übereinstimmen');
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="registration-form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={this.state.email}
          disabled="true"
        />
        <label htmlFor="validation-code">Code</label>
        <input
          type="text"
          id="validation-code"
          value={this.state.code}
          disabled="true"
        />
        <label htmlFor="password">Password</label>
        <input onChange={this.handleChange} type="password" id="password" />
        <label htmlFor="password">Password Repeat</label>
        <input
          onChange={this.handleChange}
          type="password"
          id="password_repeat"
        />
        <Button handleClick={this.handleClick} btnText="Registrieren" />
      </div>
    );
  }
}

export default withRouter(RegistrationForm);
