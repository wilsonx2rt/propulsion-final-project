import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import Button from './Components/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button />
      </div>
    );
  }
}

export default App;
