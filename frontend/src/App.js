import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import Button from './Components/Button';
import SearchBox from './Components/SearchBox';
import Nav from './Components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button />
        <SearchBox />
        <Nav />
      </div>
    );
  }
}

export default App;
