import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

import AccordionSegment from '../../Components/AccordionSegment';
import ProjectDataForm from '../../Components/ProjectDetailsForms/ProjectDataForm';
import ProjectAssignmentForm from '../../Components/ProjectDetailsForms/ProjectAssignmentForm';
import ProjectAllocationsForm from '../../Components/ProjectDetailsForms/ProjectAllocationsForm';
import ProjectFinancesForm from '../../Components/ProjectDetailsForms/ProjectFinancesForm';
import ProjectMilestonesForm from '../../Components/ProjectDetailsForms/ProjectMilestonesForm';
import ProjectDependenciesForm from '../../Components/ProjectDetailsForms/ProjectDependenciesForm';
import ProjectDevelopmentForm from '../../Components/ProjectDetailsForms/ProjectDevelopmentForm';
import { fetchDropdownsActionCreator } from '../../store/actions/fetchDropdowns';
import { deleteProjectDataAction } from '../../store/actions/deleteProjectDataAction';
import Button from '../../Components/Button';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const action = fetchDropdownsActionCreator(this.props);
    this.props.dispatch(action);
  };

  handleClick = () => {
    this.props.dispatch(deleteProjectDataAction(this.props, this.state))
  }

  // TODO : remove connect and dropdown action from this component
  render() {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', this.props);

    return (
      <div className="project-details-container">
        <div className="project-details-container__header">
          <h1>{this.props.projectName? this.props.projectName : null}</h1>
          <Button handleClick={this.handleClick} btnText="Projekt Löschen" />
        </div>
        <AccordionSegment AccordionSegmentTitle="Projectdaten">
          <ProjectDataForm project_id={this.props.match.params.project_id} />
        </AccordionSegment>
        <AccordionSegment AccordionSegmentTitle="Projektzuteilung">
          <ProjectAssignmentForm
            project_id={this.props.match.params.project_id}
          />
        </AccordionSegment>
        <AccordionSegment AccordionSegmentTitle="Projektfinanzplanung">
          <ProjectFinancesForm
            project_id={this.props.match.params.project_id}
          />
        </AccordionSegment>
        <AccordionSegment AccordionSegmentTitle="Projektablauf">
          <ProjectAllocationsForm
            project_id={this.props.match.params.project_id}
          />
        </AccordionSegment>
        <AccordionSegment AccordionSegmentTitle="Projektmeilensteine">
          <ProjectMilestonesForm
            project_id={this.props.match.params.project_id}
          />
        </AccordionSegment>
        <AccordionSegment AccordionSegmentTitle="Projektabhängigkeiten">
          <ProjectDependenciesForm
            project_id={this.props.match.params.project_id}
          />
        </AccordionSegment>
        <AccordionSegment AccordionSegmentTitle="Projektentwicklung">
          <ProjectDevelopmentForm
            project_id={this.props.match.params.project_id}
          />
        </AccordionSegment>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    projectName: state.project_details.name,
  };
};

export default withRouter(connect(mapStateToProps)(ProjectDetails));
