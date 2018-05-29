import React, { Component } from 'react';
import './index.css';
import { withRouter } from 'react-router-dom';

import Button from '../../Components/Button';
import SearchBox from '../../Components/SearchBox';
import AccordionSegment from '../../Components/AccordionSegment';

class App extends Component {

  componentDidMount = () => {
    this.props.history.push("/overview");
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default withRouter(App);
