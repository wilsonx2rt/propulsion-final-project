import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericForm from '../../GenericForm';
import { getProjectDetailsAction } from '../../../store/actions/getProjectDetailsAction';
import ProjectAllocationsList from './ProjectAllocationsList';
import GenericProjectFeatureList from '../../GenericProjectFeatureList';

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
    const action = getProjectDetailsAction(this.props);
    this.props.dispatch(action);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // if we get updated allocations which are not an empty object...
    if(nextProps.project_allocations !== undefined && nextProps.project_finances !== null) {
      const newState = Object.assign({}, prevState);
      if(prevState.project_allocations !== nextProps.project_allocations && Object.keys(nextProps.project_allocations).length) {
        // console.log('NEW ALLOCATIONS!');
        newState.project_allocations = nextProps.project_allocations.map(allocation => {
          Object.keys(allocation).map(entry => {
            if (allocation[entry] === null){
              allocation[entry] = '';
            }
            return;
          })
          return allocation;
        });
      }
      return newState;
    }
    return null;
  }

  handleChange = input_array => {
    // const newState = Object.assign({}, this.state);
    // console.log('NEW STATE ->>>>', newState);
    // newState.formPayload[input_array[0]].value = input_array[1];
    // console.log(newState);
    // this.setState({
    //   newState,
    // })
    this.state.formPayload[input_array[0]].value = input_array[1];


    // input_array is of type [field_name, value]
    // Needs to be done in this way to update state of the component based on the state of the child.
    // Input is handled by the child.
    // console.log(input_array);
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

  loadAllocation = (allocation) => {
    // console.log('>>>>>>>>',allocation);
    const newState = Object.assign({}, this.state);
    Object.keys(this.state.formPayload).map(key => {
      if (allocation[key] !== undefined && allocation[key] !== null){
        newState.formPayload[key].value = allocation[key];
      }
      return key;
    })
    // console.log('>>>>>>>', newState);
    this.setState({
      newState,
    })
  }

  handleSubmit = () => {
    console.log('Yey, submiting!');
    // const action = loginAction(this.state, this.props);
    // this.props.dispatch(action);
    // document.querySelector('#login-form').reset();
  }

  render() {
    return (
      <div className="project-allocation-form-wrapper">
        {/* <ProjectAllocationsList 
          project_allocations={ this.state.project_allocations }
          loadAllocation={ this.loadAllocation }
        /> */}
        <GenericProjectFeatureList items={ this.state.project_allocations } loadItems={ this.loadAllocation } />
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
  return {
    project_allocations: state.project_details.project_allocations,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectAllocationsForm));