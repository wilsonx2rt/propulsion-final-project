import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import Button from './Components/Button';
import SearchBox from './Components/SearchBox';
import Nav from './Components/Nav';
import LoginForm from "./Components/LoginForm";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button btnText="Button"/>
        <SearchBox />
        <Nav />
        <LoginForm/>
      </div>
    );
  }
}

export default App;
