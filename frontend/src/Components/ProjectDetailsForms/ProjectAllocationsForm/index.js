import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericForm from '../../GenericForm';
import { getProjectAllocationsAction } from '../../../store/actions/getProjectAllocationsAction';
import { postProjectAllocationAction } from '../../../store/actions/postProjectAllocationAction';
import { SERVER_URL } from '../../../store/constants';
import GenericProjectFeatureList from '../../GenericProjectFeatureList';
import { grabModifiedFields, getFetchBody, resetFormPayload, replaceNullWithEmptyString } from '../helpers';

const adminForm = {
  'form_settings': {type: 'project_data_form', },
  'year': {value: '', type: 'dropdown', required: 'false', placeholder: 'Jahr'},
  'quarter': {value: '', type: 'dropdown', required: 'false', placeholder: 'Quartal'},
  'project_phase': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Phase'},
  'project_responsibility': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Projektverantwortung'},
  'overall_pm_team__allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Gesamtprojektleitung'},
  'project_management_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Projektleitung'},
  'planner_control_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Planerleistung'},
  'construction_management_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Bauleitung'},
  'illustrator_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'ZeichnerIn'},
  'supplementary_construction_management_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Bauleitung (Baubegleitung)'},
  'communications_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Kommunikation'},
  'total_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Total Aufwand'},
}

const nonAdminForm = {
  'form_settings': {type: 'project_data_form_nonadmin', },
  'overall_pm_team__allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Gesamtprojektleitung', readonly: 'true'},
  'project_management_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Projektleitung', readonly: 'true'},
  'planner_control_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Planerleistung', readonly: 'true'},
  'construction_management_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Bauleitung', readonly: 'true'},
  'illustrator_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'ZeichnerIn', readonly: 'true'},
  'communications_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Kommunikation', readonly: 'true'},
  'total_allocation': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Total Aufwand', readonly: 'true'},
}


class ProjectAllocationsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {},
      project_allocations: [],
    };
  }

  componentDidMount = () => {
    const fetchURL = `${SERVER_URL}project_allocation/allocations/${this.props.project_id}/`
    const action = getProjectAllocationsAction(this.props, fetchURL);
    this.props.dispatch(action);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.project_allocations.results !== undefined && nextProps.project_allocations.results !== null){
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
      newState.project_allocations = nextProps.project_allocations.results;
      return newState;
    }
    return null;
  }

  checkExistingAllocations = (allocations, yearID, quarterID) => {
    let result = {};
    allocations.map(allocation => {
      if (allocation.year.id === yearID & allocation.quarter.id === quarterID) {
        result = allocation;
      }
    })
    return result;
  }

  handleChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
    this.state.formPayload[input_array[0]].modified = true;
    if (this.state.formPayload['year'].modified && this.state.formPayload['quarter'].modified && (input_array[0] === 'year' || input_array[0] === 'quarter')) {
      const yearID = this.state.formPayload['year'].value.id;
      const quarterID = this.state.formPayload['quarter'].value.id;
      const allocation = this.checkExistingAllocations(this.props.all_allocations, yearID, quarterID);
      if (Object.keys(allocation).length !== 0) {
        this.loadAllocation(allocation);
      }
    }
  };

  loadAllocation = (allocation) => {
    if (this.state.isAdmin){
      this.state.formPayload['year'].modified = true;
      this.state.formPayload['quarter'].modified = true;
      const newState = Object.assign({}, this.state);
      Object.keys(this.state.formPayload).map(key => {
        if (allocation[key] !== undefined && allocation[key] !== null && newState.formPayload[key].value !== allocation[key]){
          newState.formPayload[key].value = allocation[key];
        }
      })
      this.setState({
        newState,
      })
    }
  }

  handleSubmit = () => {
    let method = 'POST';
    let year = this.state.formPayload.year.value.id;
    let quarter = this.state.formPayload.quarter.value.id;
    let allocation_id;
    const body = getFetchBody(grabModifiedFields(this.state.formPayload));
    body.project = this.props.project_id;
    this.props.all_allocations.map(allocation => {
      if (allocation.year.id === year && allocation.quarter.id === quarter) {
        method = 'PATCH';
        allocation_id = allocation.id;
        delete body.project;
      }
    })
    if (Object.keys(body).length !== 0){
      resetFormPayload(this);
      const action = postProjectAllocationAction(this.props, body, method, allocation_id)
      this.props.dispatch(action);
    }
  }

  render() {
    return (
      <div className="project-allocation-form-wrapper">
        <GenericForm 
          title='Projektablauf'
          className={ this.state.isAdmin ? 'project-allocation-form' : 'hidden-element'}
          payload={ this.state.formPayload }
          onSubmit={ this.handleSubmit }
          updateParentState={ this.handleChange }
        />
        <GenericProjectFeatureList 
          className={ this.props.project_allocations ? '' : 'hidden-element' }
          items={ this.state.project_allocations } 
          loadItem={ this.loadAllocation } 
          parentProps={ this.props } 
          next={ this.props.project_allocations.next }
          previous={ this.props.project_allocations.previous }
          action={ getProjectAllocationsAction }
        />
      </div>
    )
    ;
  }
}

const mapStateToProps = (state, props) => {
  // console.log('--------->',state.project_allocations);
  if (state.project_details && state.project_details.project_allocations) {
    state.project_details.project_allocations = replaceNullWithEmptyString(state.project_details.project_allocations);
  }
  if (state.project_allocations.results) {
    state.project_allocations.results = replaceNullWithEmptyString(state.project_allocations.results);
  }
  // console.log(state.project_details.project_allocations);
  return {
    project_allocations: state.project_allocations,
    all_allocations: state.project_details.project_allocations,
    currentUser: state.currentUser,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectAllocationsForm));