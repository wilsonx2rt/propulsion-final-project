import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericForm from '../../GenericForm';
import { getProjectDetailsAction } from '../../../store/actions/getProjectDetailsAction';
import { postProjectAssignmentAction } from '../../../store/actions/postProjectAssignmentAction';
import { grabModifiedFields, getFetchBody, resetFormPayload } from '../helpers';

class ProjectAssignmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {
        'form_settings': {type: 'project_data_form', },
        'project_responsibility': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projektverantwortung'},
        'overall_pm_team': {value: '', type: 'dropdown', required: 'false', placeholder: 'Gesamtprojektleitung'},
        'project_management': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projektleitung'},
        'planner_control': {value: '', type: 'dropdown', required: 'false', placeholder: 'Planerleistung'},
        'construction_management': {value: '', type: 'dropdown', required: 'false', placeholder: 'Bauleitung'},
        'illustrator': {value: '', type: 'dropdown', required: 'false', placeholder: 'ZeichnerIn'},
        'communications': {value: '', type: 'dropdown', required: 'false', placeholder: 'Kommunikation'},
        'leading_role': {value: '', type: 'dropdown', required: 'false', placeholder: 'Federführende Stelle'},
        'leading_team': {value: '', type: 'dropdown', required: 'false', placeholder: 'Federführende Fachgruppe'},
      }
      
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    console.log(nextProps.project_assignment);
    if (nextProps.project_assignment!==undefined && nextProps.project_assignment !== null){
      const newState = Object.assign({}, prevState);
      Object.keys(prevState.formPayload).map(key => {
        if (key !== 'form_settings' && prevState.formPayload[key].value !== nextProps.project_assignment[key]){
          if (nextProps.project_assignment[key] !== null && nextProps.project_assignment[key] !== undefined ){
            newState.formPayload[key].value = nextProps.project_assignment[key];
          }
        }
        return key;
      })
      // console.log("NEW STATE", newState);
        return newState;
    }
    return null;
  }

  handleChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
    this.state.formPayload[input_array[0]].modified = true;
  };

  handleSubmit = () => {
    let method = 'POST';
    let assignment_id;
    let body = getFetchBody(grabModifiedFields(this.state.formPayload));
    body.project = this.props.project_id;
    if (this.props.project_assignment) {
      method = 'PATCH';
      assignment_id = this.props.project_assignment.id;
      delete body.project;
    }
    if (Object.keys(body).length !== 0){
      resetFormPayload(this);
      const action = postProjectAssignmentAction(this.props, body, method, assignment_id);
      this.props.dispatch(action);
    }
  }

  render() {
    return (
      <div className="project-assignment-form-wrapper">
        <GenericForm 
          title='Projektzuteilung'
          className='project-assignment-form'
          payload={ this.state.formPayload }
          onSubmit={ this.handleSubmit }
          updateParentState={ this.handleChange }
        />
      </div>
    )
    ;
  }
}

const mapStateToProps = (state, props) => {
  // console.log('PROJECT ASSIGNMENT',state.project_details.project_assignment);
  return {
    project_assignment: state.project_details.project_assignment,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectAssignmentForm));