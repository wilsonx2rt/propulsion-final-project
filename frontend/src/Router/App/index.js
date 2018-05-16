import React, { Component } from 'react';
import './index.css';

import Button from '../../Components/Button';
import SearchBox from '../../Components/SearchBox';
import AccordionSegment from '../../Components/AccordionSegment';

class App extends Component {
  render() {
    return (
      <div>
        <Button btnText="Button"/>
        <SearchBox />
        <br/>
        <AccordionSegment AccordionSegmentTitle="Data Category"/>
        <AccordionSegment AccordionSegmentTitle="Data Category"/>
        <AccordionSegment AccordionSegmentTitle="Data Category"/>
        <AccordionSegment AccordionSegmentTitle="Data Category"/>
      </div>
    );
  }
}

export default App;
