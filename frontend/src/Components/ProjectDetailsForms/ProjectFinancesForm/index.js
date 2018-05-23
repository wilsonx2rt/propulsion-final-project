import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

import GenericForm from '../../GenericForm';
import GenericProjectFeatureList from '../../GenericProjectFeatureList';
import PaginationButtons from "../../GenericProjectFeatureList/PaginationButtons";
import { getYearlyForecastAction } from '../../../store/actions/getYearlyForecastAction';
import { postYearlyForecastAction } from '../../../store/actions/postYearlyForecastAction';
import { postProjectFinancesAction } from '../../../store/actions/postProjectFinancesAction';
import { grabModifiedFields, getFetchBody, resetFormPayload, replaceNullWithEmptyString } from '../helpers';
import { SERVER_URL } from '../../../store/constants';

const adminForm = {
  'form_settings': {type: 'project_data_form', },
  'financing': {value: '', type: 'dropdown', required: 'false', placeholder: 'Finanzierungsart / MIP Rubrik'},
  'requirements_assessment': {value: '', type: 'dropdown', required: 'false', placeholder: 'Bedürfnisabklärung'},
  'credit_status': {value: '', type: 'dropdown', required: 'false', placeholder: 'Status Projektkredit'},
  'investment_number': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Investitions-Nr.'},
  'loan_budget': {value: '', type: 'input', inputType: 'text', required: 'true', placeholder: 'Kredit- /Budgetsumme'},
  'third_party_contributions': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Beiträge Dritter'},
  'net_expense_previous_years': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Netto-Ausgaben Vorjahre'},
  'remaining_credit_current_year': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Kreditrest per 1.1. aktuelles Jahr'},
  'spending_current_year': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Ist Ausgaben aktuelles Jahr'},
  'remaining_credit_following_year': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Kreditrest per 1.1. folgendes Jahr'},
}
const nonAdminForm = {
  'form_settings': {type: 'project_data_form_nonadmin', },
  'financing': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Finanzierungsart / MIP Rubrik', readonly: 'true'},
  'investment_number': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Investitions-Nr.', readonly: 'true'},
  'spending_current_year': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Ist Ausgaben aktuelles Jahr', readonly: 'true'},
}

class ProjectFinancesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {},
      forecastFormPayload: {
        'form_settings': {type: 'yearly_forecast_form', },
        'VAT': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'VAT'},
        'forecast': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Prognose'},
        'year': {value: '', type: 'dropdown', required: 'false', placeholder: 'Jahr'},
      },
      yearly_forecasts: [],
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.project_finances !== undefined && nextProps.project_finances !== null){
      const newState = Object.assign({}, prevState);
      if (Object.keys(nextProps.currentUser).length !== 0) {
        newState.isAdmin = nextProps.currentUser.user_profile.isAdmin;
        if (newState.isAdmin) {
          newState.formPayload = adminForm;
        }
        else {
          newState.formPayload = nonAdminForm;
        }
      }
      Object.keys(newState.formPayload).map(key => {
        if (key !== 'form_settings' && newState.formPayload[key].value !== nextProps.project_finances[key]){
          if (nextProps.project_finances[key] !== null && nextProps.project_finances[key] !== undefined ){
            newState.formPayload[key].value = nextProps.project_finances[key];
          }
        }
        return key;
      })
      if(nextProps.yearly_forecasts.results){
        newState.yearly_forecasts = nextProps.yearly_forecasts.results;
      }
      return newState;
    }
    return null;
  }

  handlePayloadChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
    this.state.formPayload[input_array[0]].modified = true;
  };

  checkExistingForecasts = (arr, yearIdToFind) => {
    let result = {};
    arr.map(forecast => {
      if (forecast['year'].id === yearIdToFind) {
        result = forecast;
      }
    })
    return result;
  }

  handleForecastChange = input_array => {
    this.state.forecastFormPayload[input_array[0]].value = input_array[1];
    this.state.forecastFormPayload[input_array[0]].modified = true;
    if(this.state.forecastFormPayload['year'].modified  && input_array[0] === 'year'){
      const forecast = this.checkExistingForecasts(this.props.project_finances.yearly_forecasts, input_array[1].id);
      if (Object.keys(forecast).length !== 0){
        this.loadForecast(forecast);
      }
    }
  }

  loadForecast = (forecast) => {
    const newState = Object.assign({}, this.state);
    Object.keys(this.state.forecastFormPayload).map(key => {
      if (forecast[key] !== undefined && forecast[key] !== null){
        newState.forecastFormPayload[key].value = forecast[key];
      }
    })
    this.setState({
      newState,
    })
  }

  handleForecastSubmit = (e) => {
    let method = 'POST';
    let forecast_id;
    let body = getFetchBody(grabModifiedFields(this.state.forecastFormPayload));
    body.project_finance = this.props.project_finances.id;
    this.state.yearly_forecasts.map(forecast => {
      if (forecast.year.id === this.state.forecastFormPayload.year.value.id) {
        method = 'PATCH';
        forecast_id = forecast.id;
        delete body.project_finance;
      }
    })
    if (Object.keys(body).length !== 0){
      resetFormPayload(this);
      const action = postYearlyForecastAction(this.props, body, method, forecast_id);
      this.props.dispatch(action);
    }
  }

  handleSubmit = () => {
    let method = 'POST';
    let finances_id;
    let body = getFetchBody(grabModifiedFields(this.state.formPayload));
    body.project = this.props.project_id;
    if (this.props.project_finances) {
      method = 'PATCH';
      finances_id = this.props.project_finances.id;
      delete body.project;
    }
    if (Object.keys(body).length !== 0){
      resetFormPayload(this);
      const action = postProjectFinancesAction(this.props, body, method, finances_id);
      this.props.dispatch(action);
    }
  }

  render() {
    return (
      <div className="project-finances-form-wrapper">
        <GenericForm 
          title='Projektfinanzplanung'
          className='project-finances-form'
          payload={ this.state.formPayload }
          onSubmit={ this.handleSubmit }
          updateParentState={ this.handlePayloadChange }
        />
        <GenericForm 
          title='Prognose'
          className={ this.props.project_finances ? 'project-finances-yearly-forecast-form' : 'hidden-element'} 
          payload={ this.state.forecastFormPayload }
          onSubmit={ this.handleForecastSubmit }
          updateParentState={ this.handleForecastChange }
        />
        <GenericProjectFeatureList 
          className={ this.props.project_finances ? '' : 'hidden-element' }
          items={ this.state.yearly_forecasts } 
          loadItem={ this.loadForecast } 
          parentProps={ this.props } 
          next = { this.props.yearly_forecasts.next ? this.props.yearly_forecasts.next : null }
          previous={ this.props.yearly_forecasts.previous ? this.props.yearly_forecasts.previous : null }
          action={ getYearlyForecastAction } 
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  // console.log('--------->', state.project_details.project_finances);
  if(state.yearly_forecasts.results){
    state.yearly_forecasts.results = replaceNullWithEmptyString(state.yearly_forecasts.results);
  }
  if (state.project_details.project_finances && state.project_details.project_finances.yearly_forecasts){
    state.project_details.project_finances.yearly_forecasts = replaceNullWithEmptyString(state.project_details.project_finances.yearly_forecasts);
  }
  return {
    project_finances: state.project_details.project_finances,
    yearly_forecasts: state.yearly_forecasts,
    currentUser: state.currentUser,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectFinancesForm));