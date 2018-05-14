import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

import AccordionSegment from '../../Components/AccordionSegment';
import ProjectDataForm from '../../Components/ProjectDetailsForms/ProjectDataForm';

class ProjectDetails extends Component {
  render() {
    return (
      <div className='project-details-container'>
        <AccordionSegment AccordionSegmentTitle="Data Category" ><ProjectDataForm/></AccordionSegment>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps)(ProjectDetails));