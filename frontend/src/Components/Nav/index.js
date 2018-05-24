import React, { Component } from 'react';
import { logOutAction } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './index.css';

class Nav extends Component {
  handleLogout = () => {
    const action = logOutAction(this.props);
    this.props.dispatch(action);
  };

  render() {
    return (
      <div className="nav-bar">
        <Link className="nav-bar__item" to="/overview">
          Übersicht
        </Link>
        <Link className="nav-bar__item" to="/overview">
          Auswertungen
        </Link>
        <Link className="nav-bar__item" to="/overview">
          Hawaii
        </Link>
        <div
          className="nav-bar__item nav-bar__item--logout"
          onClick={this.handleLogout}
        >
          Logout
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

export default withRouter(connect(mapStateToProps)(Nav));
