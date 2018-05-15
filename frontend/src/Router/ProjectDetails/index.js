import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

import AccordionSegment from '../../Components/AccordionSegment';
import ProjectDataForm from '../../Components/ProjectDetailsForms/ProjectDataForm';
import ProjectAssignmentForm from '../../Components/ProjectDetailsForms/ProjectAssignmentForm';
import ProjectAllocationForm from '../../Components/ProjectDetailsForms/ProjectAllocationForm';
import ProjectFinancesForm from '../../Components/ProjectDetailsForms/ProjectFinancesForm';
import { fetchDropdownsActionCreator } from '../../store/actions/fetchDropdowns';

class ProjectDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const action = fetchDropdownsActionCreator(this.props);
    this.props.dispatch(action);
  }

  render() {
    return (
      <div className='project-details-container'>
        <AccordionSegment AccordionSegmentTitle="Projectdaten" ><ProjectDataForm /></AccordionSegment>
        <AccordionSegment AccordionSegmentTitle="Projektzuteilung" ><ProjectAssignmentForm /></AccordionSegment>
        <AccordionSegment AccordionSegmentTitle="Projektablauf" ><ProjectAllocationForm /></AccordionSegment>
        <AccordionSegment AccordionSegmentTitle="Projektfinanzplanung" ><ProjectFinancesForm /></AccordionSegment>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    
  }
}

export default withRouter(connect(mapStateToProps)(ProjectDetails));