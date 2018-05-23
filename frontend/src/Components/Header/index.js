import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';


import bernLogo from '../../assets/bern-logo.png'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to="/overview"><img src={bernLogo} alt="bern logo"/></Link>
        <h1>Stadtgrün-PPM</h1>
      </div>
    )
  }
}

export default Header;