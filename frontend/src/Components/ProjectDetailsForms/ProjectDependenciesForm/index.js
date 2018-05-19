import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

import GenericForm from '../../GenericForm';
import Button from '../../Button';
import { SERVER_URL, SET_PROJECT_MILESTONES } from '../../../store/constants';



class ProjectDependenciesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {
        'form_settings': {type: 'project_data_form', },
        'content_dependencies': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Abhängigkeiten Inhaltlich'},
        'time_dependencies': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Abhängigkeiten Zeitlich'},
        'capacity_dependencies': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Abhängigkeiten Kapazitativ'},
      },
      project_milestones: [],
    };
  }

  componentDidMount = () => {
    // const fetchURL = `${SERVER_URL}project_milestones/milestones/${this.props.project_id}/`
    // const action = getProjectMilestonesAction(this.props, fetchURL);
    // this.props.dispatch(action);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // if we get updated allocations which are not an empty object...
    // if (nextProps.project_milestones.results !== undefined && nextProps.project_milestones.results !== null && nextProps.project_milestones.results.length > 0){
    //   const newState = Object.assign({}, prevState);
    //   newState.project_milestones = nextProps.project_milestones.results.map(milestone => {
    //     const newMilestone = Object.assign({}, milestone);
    //     Object.keys(milestone).map(entry => {
    //       if (milestone[entry] === null){
    //         newMilestone[entry] = '';
    //       }
    //       return entry;
    //     })
    //     return newMilestone;
    //   });
    //   console.log("-----", newState);
    //   return newState;
    // }
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
          title='Projektfinanzplanung'
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
  console.log('--------->', state.project_details.project_milestones);
  return {
    project_milestones: state.project_milestones,
    total_milestones: state.project_details.project_milestones,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectDependenciesForm));