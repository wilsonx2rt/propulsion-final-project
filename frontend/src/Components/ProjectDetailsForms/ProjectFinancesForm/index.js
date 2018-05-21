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
import { grabModifiedFields, getFetchBody, resetFormPayload } from '../helpers';
import { SERVER_URL } from '../../../store/constants';

class ProjectFinancesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {
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
      },
      forecastFormPayload: {
        'form_settings': {type: 'yearly_forecast_form', },
        'VAT': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'VAT'},
        'forecast': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Prognose'},
        'year': {value: '', type: 'dropdown', required: 'false', placeholder: 'Jahr'},
      },
      yearly_forecasts: [],
    };
  }

  componentDidMount = () => {
    if(this.props.project_finances){
      
    }
}


  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.project_finances !== undefined && nextProps.project_finances !== null){
      const newState = Object.assign({}, prevState);
      Object.keys(prevState.formPayload).map(key => {
        if (key !== 'form_settings' && prevState.formPayload[key].value !== nextProps.project_finances[key]){
          if (nextProps.project_finances[key] !== null && nextProps.project_finances[key] !== undefined ){
            newState.formPayload[key].value = nextProps.project_finances[key];
          }
        }
        return key;
      })
      if(nextProps.yearly_forecasts.results){
        newState.yearly_forecasts = nextProps.yearly_forecasts.results.map(forecast => {
          const newForecast = Object.assign({}, forecast);
          Object.keys(forecast).map(entry => {
            if (forecast[entry] === null || forecast[entry] === undefined){
              newForecast[entry] = '';
            }
            return entry;
          })
          return newForecast;
        });
      }
      return newState;
    }
    return null;
  }

  handlePayloadChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
    this.state.formPayload[input_array[0]].modified = true;
  };

  handleForecastChange = input_array => {
    this.state.forecastFormPayload[input_array[0]].value = input_array[1];
    this.state.forecastFormPayload[input_array[0]].modified = true;
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
        <PaginationButtons 
          next={ this.props.yearly_forecasts.next }
          previous={ this.props.yearly_forecasts.previous }
          action={ getYearlyForecastAction }
          parentProps={ this.props }
        />
        <GenericProjectFeatureList items={ this.state.yearly_forecasts } loadItem={ this.loadForecast }/>
        <GenericForm 
          title='Prognose'
          className='project-finances-yearly-forecast-form'
          payload={ this.state.forecastFormPayload }
          onSubmit={ this.handleForecastSubmit }
          updateParentState={ this.handleForecastChange }
        />
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
  // console.log('--------->', state.yearly_forecasts);
  return {
    project_finances: state.project_details.project_finances,
    yearly_forecasts: state.yearly_forecasts,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectFinancesForm));