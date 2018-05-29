import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

import AccordionSegment from '../../Components/AccordionSegment';
import ProjectDataForm from '../../Components/ProjectDetailsForms/ProjectDataForm';
import ProjectAssignmentForm from '../../Components/ProjectDetailsForms/ProjectAssignmentForm';
import Footer from '../../Components/Footer';
import ProjectAllocationsForm from '../../Components/ProjectDetailsForms/ProjectAllocationsForm';
import ProjectFinancesForm from '../../Components/ProjectDetailsForms/ProjectFinancesForm';
import ProjectMilestonesForm from '../../Components/ProjectDetailsForms/ProjectMilestonesForm';
import ProjectDependenciesForm from '../../Components/ProjectDetailsForms/ProjectDependenciesForm';
import ProjectDevelopmentForm from '../../Components/ProjectDetailsForms/ProjectDevelopmentForm';
import { fetchDropdownsActionCreator } from '../../store/actions/fetchDropdowns';
import { deleteProjectDataAction } from '../../store/actions/deleteProjectDataAction';
import Button from '../../Components/Button';

import alertify from 'alertify.js';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const action = fetchDropdownsActionCreator(this.props);
    this.props.dispatch(action);
  };

  handleDelete = () => {
    // confirm dialog
    alertify.confirm('Möchten Sie dieses Projekt wirklich löschen?', () => {
      this.props.dispatch(deleteProjectDataAction(this.props, this.state));
      },
      () => {
        null
      }
    );
  };

  // TODO : remove connect and dropdown action from this component
  render() {
    return (
      <div className="project-details-container">
        <div className="project-details-container__header">
          <h1>{this.props.projectName ? this.props.projectName : null}</h1>
          {this.props.user_profile && this.props.user_profile.isAdmin ? (
            <Button
              className="project-details-container__header__button generic-form__button--delete"
              handleClick={this.handleDelete}
              btnText="Projekt Löschen"
            />
          ) : null}
        </div>
        <AccordionSegment AccordionSegmentTitle="Projektdaten">
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
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    projectName: state.project_details.name,
    user_profile: state.currentUser.user_profile
  };
};

export default withRouter(connect(mapStateToProps)(ProjectDetails));
