import React, { Component } from 'react';
import './index.css';

import bernLogo from '../../assets/bern-logo.png'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src={bernLogo} alt="bern logo"/>
        <h1>Stadtgrün-PPM</h1>
      </div>
    )
  }
}

export default Header;