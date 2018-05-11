import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import Button from './Components/Button';
import SearchBox from './Components/SearchBox';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button />
        <SearchBox />
      </div>
    );
  }
}

export default App;
