import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

import GenericForm from '../../GenericForm';
import Button from '../../Button';
import { SERVER_URL, SET_PROJECT_MILESTONES } from '../../../store/constants';
import { getProjectDependenciesAction } from '../../../store/actions/getProjectDependenciesAction';


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
    // if we get updated allocations which are not an empty object...
    if (nextProps.project_dependencies.results !== undefined && nextProps.project_dependencies.results !== null && nextProps.project_dependencies.results.length > 0){
      const newState = Object.assign({}, prevState);
      newState.project_dependencies = nextProps.project_dependencies.results.map(dependency => {
        const newDependency = Object.assign({}, dependency);
        Object.keys(dependency).map(entry => {
          if (dependency[entry] === null){
            dependency[entry] = '';
          }
          return entry;
        })
        return newDependency;
      });
      console.log("-----", newState);
      return newState;
    }
    return null;
  }

  handlePayloadChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
    this.state.formPayload[input_array[0]].modified = true;
  };

  loadDependency = (dependency) => {
    // console.log('>>>>>>>>', dependency);
    const newState = Object.assign({}, this.state);
    Object.keys(this.state.formPayload).map(key => {
      if (dependency[key] !== undefined && dependency[key] !== null && newState.formPayload[key].value !== dependency[key]){
        newState.formPayload[key].value = dependency[key];
        newState.formPayload[key].modified = true;
      }
    })
    // console.log('>>>>>>>', newState);
    this.setState({
      newState,
    })
  }

  grabModifiedFields = () => {
    let changed = [];
    Object.keys(this.state.formPayload).map(key => {
      if (this.state.formPayload[key].modified) {
        changed.push({[key]: this.state.formPayload[key]});
      }
    })
    return changed;
  }

  getFetchBody = (arr) => {
    // let body = {};
    // arr.map(field => {
    //   const bodyKey = Object.keys(field)[0];
    //   if (typeof field[bodyKey].value === 'object'){
    //     body[bodyKey] = field[bodyKey].value.id;
    //   }
    //   else {
    //     body[bodyKey] = field[bodyKey].value;
    //   }
    // })
    // return body;
  }

  handleSubmit = (e) => {
    // let method = 'POST';
    // let year = this.state.formPayload.year.value.id;
    // let week = this.state.formPayload.milestone_calendar_week.value.id;
    // let milestone_id;
    // const body = this.getFetchBody(this.grabModifiedFields());
    // body.project = this.props.project_id;
    // this.props.total_milestones.map(milestone => {
    //   if (milestone.year.id === year && milestone.milestone_calendar_week.id === week) {
    //     method = 'PATCH';
    //     milestone_id = milestone.id;
    //     delete body.project;
    //   }
    // })
    // this.props.dispatch(action);
  }

  render() {
    return (
      <div className="project-dependencies-form-wrapper">
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