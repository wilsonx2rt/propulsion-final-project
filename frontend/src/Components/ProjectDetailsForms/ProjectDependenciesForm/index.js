import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

import GenericForm from '../../GenericForm';
import Button from '../../Button';
import { SERVER_URL, SET_PROJECT_MILESTONES } from '../../../store/constants';
import { getProjectDependenciesAction } from '../../../store/actions/getProjectDependenciesAction';
import { postProjectDependencyAction } from '../../../store/actions/postProjectDependencyAction';
import GenericProjectFeatureList from '../../GenericProjectFeatureList';
import PaginationButtons from "../../GenericProjectFeatureList/PaginationButtons";
import { goNextPage, goPrevPage, grabModifiedFields, getFetchBody, resetFormPayload } from '../helpers';


class ProjectDependenciesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {
        'form_settings': {type: 'project_data_form', },
        'content_dependencies': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Abhängigkeiten Inhaltlich'},
        'time_dependencies': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Abhängigkeiten Zeitlich'},
        'capacity_dependencies': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Abhängigkeiten Kapazitativ'},
        'id': {value: ''},
      },
      project_dependencies: [],
    };
  }

  componentDidMount = () => {
    const fetchURL = `${SERVER_URL}project_dependencies/dependencies/${this.props.project_id}/`
    const action = getProjectDependenciesAction(this.props, fetchURL);
    this.props.dispatch(action);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.project_dependencies.results !== undefined && nextProps.project_dependencies.results !== null && nextProps.project_dependencies.results.length > 0){
      const newState = Object.assign({}, prevState);
      newState.project_dependencies = nextProps.project_dependencies.results.map(dependency => {
        const newDependency = Object.assign({}, dependency);
        Object.keys(dependency).map(entry => {
          if (dependency[entry] === null){
            newDependency[entry] = '';
          }
          return entry;
        })
        return newDependency;
      });
      return newState;
    }
    return null;
  }

  handlePayloadChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
    this.state.formPayload[input_array[0]].modified = true;
  };

  loadDependency = (dependency) => {
    const newState = Object.assign({}, this.state);
    Object.keys(this.state.formPayload).map(key => {
      if (dependency[key] !== undefined && dependency[key] !== null && newState.formPayload[key].value !== dependency[key]){
        newState.formPayload[key].value = dependency[key];
      }
    })
    this.setState({
      newState,
    })
  }

  handleSubmit = () => {
    let method = 'POST';
    let dependency_id;
    const body = getFetchBody(grabModifiedFields(this.state.formPayload));
    body.project = this.props.project_id;
    this.props.all_dependencies.map(dependency => {
      if (dependency.id === this.state.formPayload.id.value) {
        method = 'PATCH';
        dependency_id = dependency.id;
        delete body.project;
      }
    })
    if (Object.keys(body).length !== 0){
      resetFormPayload(this);
      const action = postProjectDependencyAction(this.props, body, method, dependency_id)
      this.props.dispatch(action);
    }
  }

  render() {
    return (
      <div className="project-dependencies-form-wrapper">
        <PaginationButtons 
          next={ this.props.project_dependencies.next }
          previous={ this.props.project_dependencies.previous }
          action={ getProjectDependenciesAction }
          parentProps={ this.props }
        />
        <GenericProjectFeatureList items={ this.state.project_dependencies } loadItem={ this.loadDependency } />
        <GenericForm 
          title='Projektabhängigkeiten'
          className='project-dependencies-form'
          payload={ this.state.formPayload }
          onSubmit={ this.handleSubmit }
          updateParentState={ this.handlePayloadChange }
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  // console.log('--------->', state.project_dependencies);
  return {
    project_dependencies: state.project_dependencies,
    all_dependencies: state.project_details.project_dependencies,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectDependenciesForm));