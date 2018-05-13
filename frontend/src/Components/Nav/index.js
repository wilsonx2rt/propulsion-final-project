import React, { Component } from 'react';
import { logOutAction } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css'

class Nav extends Component {

  handleLogout = () => {
    const action = logOutAction(this.props);
    this.props.dispatch(action);
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar__item">Some Page</div>
        <div className="nav-bar__item">Some Page</div>
        <div className="nav-bar__item">Some Page</div>
        <div className="nav-bar__item nav-bar__item--logout" onClick={ this.handleLogout }>Logout</div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return  {

  }
}

export default withRouter(connect(mapStateToProps)(Nav));