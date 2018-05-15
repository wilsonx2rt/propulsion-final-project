import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import Button from '../../Button';
// import InputField from '../../InputField';
// import SelectField from '../../SelectField';
// import FileUploadField from '../../FileUploadField';
import GenericForm from '../../GenericForm';

class ProjectAssignmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.formPayload = {
      'form_settings': {type: 'project_data_form', },
      'project_responsibility': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projektverantwortung'},
      'overall_pm_team': {value: '', type: 'dropdown', required: 'false', placeholder: 'Gesamtprojektleitung'},
      'project_management': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projektleitung'},
      'planner_control': {value: '', type: 'dropdown', required: 'false', placeholder: 'Planerleistung'},
      'construction_management': {value: '', type: 'dropdown', required: 'false', placeholder: 'Bauleitung'},
      'illustrator': {value: '', type: 'dropdown', required: 'false', placeholder: 'ZeichnerIn'},
      'supplementary_construction_management': {value: '', type: 'dropdown', required: 'false', placeholder: 'Bauleitung (Baubegleitung)'},
      'communications': {value: '', type: 'dropdown', required: 'false', placeholder: 'Kommunikation'},
    }
  }

  handleChange = input_array => {
    this.formPayload[input_array[0]].value = input_array[1];
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
          payload={ this.formPayload }
          onSubmit={ this.handleSubmit }
          updateParentState={ this.handleChange }
        />
      </div>
    )
    ;
  }
}

const mapStateToProps = (state, props) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps)(ProjectAssignmentForm));