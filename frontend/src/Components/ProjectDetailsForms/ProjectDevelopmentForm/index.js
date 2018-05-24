import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericForm from '../../GenericForm';
import { getProjectDetailsAction } from '../../../store/actions/getProjectDetailsAction';
import { postProjectDevelopmentAction } from '../../../store/actions/postProjectDevelopmentAction';
import { grabModifiedFields, getFetchBody, resetFormPayload, replaceNullWithEmptyString } from '../helpers';
import './index.css';

class ProjectDevelopmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {
        'form_settings': {type: 'project_data_form', },
        'project_status': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projektstatus'},
        'project_tendency': {value: '', type: 'dropdown', required: 'false', placeholder: 'Tendenz'},
      }
      
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.project_development!==undefined && nextProps.project_development !== null){
      const newState = Object.assign({}, prevState);
      Object.keys(prevState.formPayload).map(key => {
        if (key !== 'form_settings' && prevState.formPayload[key].value !== nextProps.project_development[key]){
          if (nextProps.project_development[key] !== null && nextProps.project_development[key] !== undefined ){
            newState.formPayload[key].value = nextProps.project_development[key];
          }
        }
        return key;
      })
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
    let development_id;
    let body = getFetchBody(grabModifiedFields(this.state.formPayload));
    body.project = this.props.project_id;
    if (this.props.project_development) {
      method = 'PATCH';
      development_id = this.props.project_development.id;
      delete body.project;
    }
    if (Object.keys(body).length !== 0){
      // resetFormPayload(this);
      const action = postProjectDevelopmentAction(this.props, body, method, development_id);
      this.props.dispatch(action);
    }
  }

  render() {
    return (
      <div className="project-development-form-wrapper generic-form-container">
        <GenericForm 
          title='Projektentwicklung'
          className='project-development-form'
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
  if (state.project_details && state.project_details.project_development) {
    state.project_details.project_development = replaceNullWithEmptyString(state.project_details.project_development);
  }
  return {
    project_development: state.project_details.project_development,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectDevelopmentForm));