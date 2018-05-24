import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericForm from '../../GenericForm';
import { postProjectAssignmentAction } from '../../../store/actions/postProjectAssignmentAction';
import PMField from '../../PMField';
import { grabModifiedFields, getFetchBody, hasPM, removePM, replaceNullWithEmptyString } from '../helpers';

const adminForm = {
  'form_settings': {type: 'project_data_form', },
  'project_responsibility': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projektverantwortung'},
  'overall_pm_team': {value: '', type: 'dropdown', required: 'false', placeholder: 'Gesamtprojektleitung'},
  'project_management': {value: [], type: 'project_management', required: 'false', placeholder: 'Projektleitung'},
  'planner_control': {value: '', type: 'dropdown', required: 'false', placeholder: 'Planerleistung'},
  'construction_management': {value: '', type: 'dropdown', required: 'false', placeholder: 'Bauleitung'},
  'illustrator': {value: '', type: 'dropdown', required: 'false', placeholder: 'ZeichnerIn'},
  'communications': {value: '', type: 'dropdown', required: 'false', placeholder: 'Kommunikation'},
  'leading_role': {value: '', type: 'dropdown', required: 'false', placeholder: 'Federführende Stelle'},
  'leading_team': {value: '', type: 'dropdown', required: 'false', placeholder: 'Federführende Fachgruppe'},
}

const nonAdminForm = {
  'form_settings': {type: 'project_data_form_nonadmin', },
  'project_responsibility': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Projektverantwortung', readonly: 'true'},
  'overall_pm_team': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Gesamtprojektleitung', readonly: 'true'},
  'project_management': {value: '', type: 'project_management', required: 'false', placeholder: 'Projektleitung', readonly: 'true'},
  'planner_control': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Planerleistung', readonly: 'true'},
  'construction_management': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Bauleitung', readonly: 'true'},
  'illustrator': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'ZeichnerIn', readonly: 'true'},
  'communications': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Kommunikation', readonly: 'true'},
}

class ProjectAssignmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {},
      all_managers: [],
      // isAdmin: false,
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.project_assignment!==undefined && nextProps.project_assignment !== null){
      const newState = Object.assign({}, prevState);
      if (Object.keys(nextProps.currentUser).length !== 0) {
        newState.isAdmin = nextProps.currentUser.user_profile.isAdmin;
        if (newState.isAdmin) {
          newState.formPayload = adminForm;
        }
        else {
          newState.formPayload = nonAdminForm;
        }
      }
      Object.keys(newState.formPayload).map(key => {
        if (key !== 'form_settings'){
          if (nextProps.project_assignment[key] !== null && nextProps.project_assignment[key] !== undefined ){
            newState.formPayload[key].value = nextProps.project_assignment[key];
          }
        }
        return key;
      })
      if (newState.isAdmin){
        if (nextProps.all_managers!==undefined && nextProps.all_managers !== null && Object.keys(nextProps.all_managers).length !== 0){
          const tempManagers = [];
          nextProps.all_managers.map(manager => {
            tempManagers.push(manager);
            return null;
          })
          newState.all_managers = tempManagers;
        }
      }
      else {
        if (nextProps.project_assignment.project_management) {
          newState.all_managers = nextProps.project_assignment.project_management;
        }
      }
      // console.log(newState);
      return newState;
    }
    return null;
  }

  handleChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
    this.state.formPayload[input_array[0]].modified = true;
  };

  toggleCheckboxes = item => {
    const newState = Object.assign({}, this.state);
    if (hasPM(newState.formPayload.project_management.value, item)){
      newState.formPayload.project_management.value = removePM(newState.formPayload.project_management.value, item);
    }
    else {
      newState.formPayload.project_management.value.push(item);
    }
    newState.formPayload.project_management.modified = true;
    this.setState(newState);
  }

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
      // resetFormPayload(this);
      const action = postProjectAssignmentAction(this.props, body, method, assignment_id);
      this.props.dispatch(action);
    }
  }

  render() {
    return (
      <div className="project-assignment-form-wrapper generic-form-container">
        <PMField 
          className={ 'project-assignment-form__checkboxes-container' }
          name='Projektleitung'
          toggleCheckboxes={ this.toggleCheckboxes }
          all_managers={ this.state.all_managers }
          current_managers={ this.state.formPayload['project_management'] && Object.keys(this.state.formPayload['project_management'].value).length ? this.state.formPayload['project_management'].value : null }
          isAdmin={ this.state.isAdmin }
        />
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
  if (state.project_details && state.project_details.project_assignment) {
    state.project_details.project_assignment = replaceNullWithEmptyString(state.project_details.project_assignment);
  }
  if (state.managerOverview) {
    state.managerOverview = replaceNullWithEmptyString(state.managerOverview);
  }
  return {
    project_assignment: state.project_details.project_assignment,
    all_managers: state.managerOverview,
    currentUser: state.currentUser,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectAssignmentForm));