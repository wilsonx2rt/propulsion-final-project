import React, { Component } from "react";
import "./index.css";
import Button from '../Button'

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
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="login-form-wrapper">
        <form id="login-form">
          <input
            className="login-form__input"
            type="email"
            name="username"
            id="username"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            className="login-form__input"
            type="password"
            name="password"
            id="password"
            placeholder="Kennwort"
            onChange={this.handleChange}
          />
          <Button id="login-form__button" btnText="Login"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
