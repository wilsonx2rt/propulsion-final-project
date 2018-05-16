import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericForm from '../../GenericForm';
import { getProjectAssignmentAction } from '../../../store/actions/getProjectAssignmentAction';

class ProjectAllocationForm extends Component {
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
      }
      
    };
  }

  componentDidMount = () => {
    const action = getProjectAssignmentAction(this.props);
    this.props.dispatch(action);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // if (prevState.formPayload.project_responsibility.value === '' && nextProps.project_assignment.project_responsibility!==''){
    //   const newState = Object.assign({}, prevState);
    //   Object.keys(prevState.formPayload).map(key => {
    //     console.log(nextProps);
    //     if (nextProps.project_assignment[key] !== null && nextProps.project_assignment[key] !== undefined && key !== 'form_settings'){
    //       newState.formPayload[key].value = nextProps.project_assignment[key]
    //     }
    //   })
    //   console.log(newState);
    //   return newState;
    // }
    return null;
  }

  handleChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
    // input_array is of type [field_name, value]
    // Needs to be done in this way to update state of the component based on the state of the child.
    // Input is handled by the child.
    // console.log(input_array);
    // const newState = Object.assign({}, this.state);
    // console.log(newState === this.state);
    // const newFieldState = Object.assign({}, newState[input_array[0]]);
    // console.log(newFieldState);
    // newFieldState.value = input_array[1];
    // console.log(newFieldState === newState[input_array[0]]);
    // newState[input_array[0]] = newFieldState;
    // console.log(newState);
    // this.setState(
    //   newState
    // );
  };

  handleSubmit = () => {
    console.log('Yey, submiting!');
    // const action = loginAction(this.state, this.props);
    // this.props.dispatch(action);
    // document.querySelector('#login-form').reset();
  }

  render() {
    return (
      <div className="project-data-form-wrapper">
        <GenericForm 
          className='project-data-form'
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
  console.log(state);
  return {
    
  }
}

export default withRouter(connect(mapStateToProps)(ProjectAllocationForm));