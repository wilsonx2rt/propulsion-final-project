import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import './index.css';

import GenericForm from '../../GenericForm';
import { getProjectMilestonesAction } from '../../../store/actions/getProjectMilestonesAction';



class ProjectMilestonesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {
        'form_settings': {type: 'project_data_form', },
        'year': {value: '', type: 'dropdown', required: 'false', placeholder: 'Jahr'},
        'milestone_calendar_week': {value: '', type: 'dropdown', required: 'false', placeholder: 'Meilenstein Kalenderwoche'},
        'milestone_value': {value: '', type: 'dropdown', required: 'false', placeholder: 'Meilstein Inhalt'},
        'tendency': {value: '', type: 'dropdown', required: 'false', placeholder: 'Tendenz'},
        'external_factors': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Einfluss externe Faktoren'},
        'communications': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Kommunicaton'},
      },
      // forecastFormPayload: {
      //   'form_settings': {type: 'yearly_forecast_form', },
      //   'VAT': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'VAT'},
      //   'forecast': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Prognose'},
      //   'year': {value: '', type: 'dropdown', required: 'false', placeholder: 'Jahr'},
      // },
      project_milestones: [],
    };
  }

  componentDidMount = () => {
    const action = getProjectMilestonesAction(this.props);
    this.props.dispatch(action);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // if we get updated allocations which are not an empty object...
    if (nextProps.project_milestones !== undefined && nextProps.project_milestones !== null && nextProps.project_milestones.length > 0){
      const newState = Object.assign({}, prevState);
      // Object.keys(prevState.formPayload).map(key => {
      //   if (key !== 'form_settings' && prevState.formPayload[key].value !== nextProps.project_finances[key]){
      //     if (nextProps.project_finances[key] !== null && nextProps.project_finances[key] !== undefined ){
      //       newState.formPayload[key].value = nextProps.project_finances[key];
      //     }
      //   }
      //   return key;
      // })
      newState.project_milestones = nextProps.project_milestones.map(milestone => {
        const newMilestone = Object.assign({}, milestone);
        Object.keys(milestone).map(entry => {
          if (milestone[entry] === null){
            newMilestone[entry] = '';
          }
          return entry;
        })
        return newMilestone;
      });
      console.log("-----", newState);
      return newState;
    }
    return null;
  }

  handlePayloadChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
  };

  handleForecastChange = input_array => {
    this.state.forecastFormPayload[input_array[0]].value = input_array[1];
  }

  loadForecast = (forecast) => {
    // console.log('>>>>>>>>', forecast);
    // const newState = Object.assign({}, this.state);
    // Object.keys(this.state.forecastFormPayload).map(key => {
    //   if (forecast[key] !== undefined && forecast[key] !== null){
    //     newState.forecastFormPayload[key].value = forecast[key];
    //   }
    // })
    // // console.log('>>>>>>>', newState);
    // this.setState({
    //   newState,
    // })
  }

  handleForecastSubmit = (e) => {

  }

  handleSubmit = () => {
    console.log('Yey, submiting!');
    // const action = loginAction(this.state, this.props);
    // this.props.dispatch(action);
    // document.querySelector('#login-form').reset();
  }

  render() {
    return (
      <div className="project-finances-form-wrapper">
        {/* <GenericForm 
          title='Prognose'
          className='project-finances-yearly-forecast-form'
          payload={ this.state.forecastFormPayload }
          onSubmit={ this.handleForecastSubmit }
          updateParentState={ this.handleForecastChange }
        /> */}
        <GenericForm 
          title='Projektfinanzplanung'
          className='project-finances-form'
          payload={ this.state.formPayload }
          onSubmit={ this.handleSubmit }
          updateParentState={ this.handlePayloadChange }
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('--------->', state.project_milestones);
  return {
    // project_milestones: state.project_details.project_milestones,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectMilestonesForm));