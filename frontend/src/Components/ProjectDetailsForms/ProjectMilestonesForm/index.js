import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import './index.css';

import GenericForm from '../../GenericForm';
import { getProjectMilestonesAction } from '../../../store/actions/getProjectMilestonesAction';
import { postProjectMilestone } from '../../../store/actions/postProjectMilestone';
import Button from '../../Button';
import { SERVER_URL } from '../../../store/constants';
import GenericProjectFeatureList from "../../GenericProjectFeatureList";
import { goNextPage, goPrevPage, grabModifiedFields, getFetchBody, resetFormPayload, replaceNullWithEmptyString } from '../helpers';
import PaginationButtons from "../../GenericProjectFeatureList/PaginationButtons";


class ProjectMilestonesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {
        'form_settings': {type: 'project_data_form', },
        'year': {value: '', type: 'dropdown', required: 'false', placeholder: 'Jahr'},
        'milestone_calendar_week': {value: '', type: 'dropdown', required: 'false', placeholder: 'Meilenstein Kalenderwoche'},
        'milestone_value': {value: '', type: 'dropdown', required: 'false', placeholder: 'Meilstein Inhalt'},
        'tendency': {value: '', type: 'dropdown', required: 'false', placeholder: 'Tendenz'},
        'external_factors': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Einfluss externe Faktoren'},
        'communications': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Kommunication'},
      },
      project_milestones: [],
    };
  }

  componentDidMount = () => {
    const fetchURL = `${SERVER_URL}project_milestones/milestones/${this.props.project_id}/`
    const action = getProjectMilestonesAction(this.props, fetchURL);
    this.props.dispatch(action);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.project_milestones.results !== undefined && nextProps.project_milestones.results !== null && nextProps.project_milestones.results.length > 0){
      const newState = Object.assign({}, prevState);
      newState.project_milestones = nextProps.project_milestones.results;
      return newState;
    }
    return null;
  }

  checkExistingMilestones = (milestones, yearID, weekID) => {
    let result = {};
    milestones.map(milestone => {
      if (milestone.year.id === yearID & milestone.milestone_calendar_week.id === weekID) {
        result = milestone;
      }
    })
    return result;
  }

  handlePayloadChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
    this.state.formPayload[input_array[0]].modified = true;
    if (this.state.formPayload['year'].modified && this.state.formPayload['milestone_calendar_week'].modified && (input_array[0] === 'year' || input_array[0] === 'milestone_calendar_week')) {
      const yearID = this.state.formPayload['year'].value.id;
      const weekID = this.state.formPayload['milestone_calendar_week'].value.id;
      const milestone = this.checkExistingMilestones(this.props.total_milestones, yearID, weekID);
      console.log(milestone);
      if (Object.keys(milestone).length !== 0){
        this.loadMilestone(milestone);
      }
    }
  };

  loadMilestone = (milestone) => {
    this.state.formPayload['year'].modified = true;
    this.state.formPayload['milestone_calendar_week'].modified = true;
    const newState = Object.assign({}, this.state);
    Object.keys(this.state.formPayload).map(key => {
      if (milestone[key] !== undefined && milestone[key] !== null && newState.formPayload[key].value !== milestone[key]){
        newState.formPayload[key].value = milestone[key];
      }
    })
    this.setState({
      newState,
    })
  }

  handleSubmit = (e) => {
    let method = 'POST';
    let year = this.state.formPayload.year.value.id;
    let week = this.state.formPayload.milestone_calendar_week.value.id;
    let milestone_id;
    const body = getFetchBody(grabModifiedFields(this.state.formPayload));
    body.project = this.props.project_id;
    this.props.total_milestones.map(milestone => {
      if (milestone.year.id === year && milestone.milestone_calendar_week.id === week) {
        method = 'PATCH';
        milestone_id = milestone.id;
        delete body.project;
      }
    })
    if (Object.keys(body).length !== 0){
      resetFormPayload(this);
      const action = postProjectMilestone(this.props, body, method, milestone_id)
      this.props.dispatch(action);
    }
  }

  render() {
    return (
      <div className="project-milestones-form-wrapper">
        <GenericForm 
          title='Projektmeilensteine'
          className='project-milestones-form'
          payload={ this.state.formPayload }
          onSubmit={ this.handleSubmit }
          updateParentState={ this.handlePayloadChange }
        />
        <GenericProjectFeatureList 
          className={ this.props.project_milestones ? '' : 'hidden-element' }
          items={ this.state.project_milestones } 
          loadItem={ this.loadMilestone } 
          parentProps={ this.props } 
          next={ this.props.project_milestones.next }
          previous={ this.props.project_milestones.previous }
          action={ getProjectMilestonesAction }  
        />
        {/* <PaginationButtons
          next={ this.props.project_milestones.next }
          previous={ this.props.project_milestones.previous }
          action={ getProjectMilestonesAction }
          parentProps={ this.props }
        /> */}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  // console.log('--------->', state.project_details.project_milestones);
  if (state.project_milestones.results) {
    state.project_milestones.results = replaceNullWithEmptyString(state.project_milestones.results);
  }
  if (state.project_details && state.project_details.project_milestones) {
    state.project_details.project_milestones = replaceNullWithEmptyString(state.project_details.project_milestones);
  }
  return {
    project_milestones: state.project_milestones,
    total_milestones: state.project_details.project_milestones,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectMilestonesForm));