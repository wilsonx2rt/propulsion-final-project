import React, { Component } from 'react';
import './index.css';
import { hideNavBar } from '../../helpers';
import RegistrationForm from '../../Components/RegistrationForm';
import queryString from 'query-string';
class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      code: ''
    };
  }

  componentDidMount = () => {
    hideNavBar();
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.location.search) {
      const email = queryString.parse(nextProps.location.search).email;
      const code = queryString.parse(nextProps.location.search).code;
      const newState = {...prevState};
      newState.email = email;
      newState.code = code;
      return newState
    }
    return null;
  };

  render() {
    return (
      <div className="registration-page-container">
        <RegistrationForm email={this.state.email} code={this.state.code}/>
      </div>
    );
  }
}

export default Registration;
