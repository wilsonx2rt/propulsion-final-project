import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';


import react from '../../assets/react.png'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to="/overview"><img id="react-logo" src={react} alt="bern logo"/></Link>
        <h1>Matryoshka</h1>
      </div>
    )
  }
}

export default Header;