import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericForm from '../../GenericForm';
import { getProjectAllocationsAction } from '../../../store/actions/getProjectAllocationsAction';
import { postProjectAllocationAction } from '../../../store/actions/postProjectAllocationAction';
import { SERVER_URL } from '../../../store/constants';
import GenericProjectFeatureList from '../../GenericProjectFeatureList';
import PaginationButtons from "../../GenericProjectFeatureList/PaginationButtons";
import { goNextPage, goPrevPage, grabModifiedFields, getFetchBody, resetFormPayload, replaceNullWithEmptyString } from '../helpers';

class ProjectAllocationsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {
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
      },

      project_allocations: [],
    };
  }

  componentDidMount = () => {
    const fetchURL = `${SERVER_URL}project_allocation/allocations/${this.props.project_id}/`
    const action = getProjectAllocationsAction(this.props, fetchURL);
    this.props.dispatch(action);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.project_allocations.results !== undefined && nextProps.project_allocations.results !== null && nextProps.project_allocations.results.length > 0){
      const newState = Object.assign({}, prevState);
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
    if (this.state.formPayload['year'].modified && this.state.formPayload['quarter'].modified) {
      const yearID = this.state.formPayload['year'].value.id;
      const quarterID = this.state.formPayload['quarter'].value.id;
      const allocation = this.checkExistingAllocations(this.props.all_allocations, yearID, quarterID);
      if (Object.keys(allocation).length !== 0) {
        this.loadAllocation(allocation);
      }
    }
  };

  loadAllocation = (allocation) => {
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
        <PaginationButtons 
          next={ this.props.project_allocations.next }
          previous={ this.props.project_allocations.previous }
          action={ getProjectAllocationsAction }
          parentProps={ this.props }
        />
        <GenericProjectFeatureList items={ this.state.project_allocations } loadItem={ this.loadAllocation } />
        <GenericForm 
          title='Projektablauf'
          className='project-allocation-form'
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
  // console.log('--------->',state.project_details.project_allocations);
  if (state.project_details && state.project_details.project_allocations) {
    state.project_details.project_allocations = replaceNullWithEmptyString(state.project_details.project_allocations);
  }
  if (state.project_allocations.results) {
    state.project_allocations.results = replaceNullWithEmptyString(state.project_allocations.results);
  }
  return {
    project_allocations: state.project_allocations,
    all_allocations: state.project_details.project_allocations,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectAllocationsForm));