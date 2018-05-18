import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericForm from '../../GenericForm';
import { getProjectDetailsAction } from '../../../store/actions/getProjectDetailsAction';

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

  componentDidMount = () => {
    const action = getProjectDetailsAction(this.props);
    this.props.dispatch(action);
  }


  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.project_assignment!==undefined && nextProps.project_finances !== null){
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