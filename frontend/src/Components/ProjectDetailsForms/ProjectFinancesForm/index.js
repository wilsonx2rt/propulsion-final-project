import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

import GenericForm from '../../GenericForm';
import { getProjectDetailsAction } from '../../../store/actions/getProjectDetailsAction';
import { postYearlyForecastAction } from '../../../store/actions/postYearlyForecastAction';
import YearlyForecastList from "./YearlyForecastList";

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
        // 'forecast_current_year': {value: '', type: 'input', inputType: 'text', required: 'false', placeholder: 'Prognose laufendes Jahr'},
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
    const action = getProjectDetailsAction(this.props);
    this.props.dispatch(action);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // if we get updated allocations which are not an empty object...
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
      newState.yearly_forecasts = nextProps.project_finances.yearly_forecasts.map(forecast => {
        const newForecast = Object.assign({}, forecast);
        Object.keys(forecast).map(entry => {
          if (forecast[entry] === null){
            newForecast[entry] = '';
          }
          return entry;
        })
        return newForecast;
      });
      // console.log("-----", newState);
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
    const newState = Object.assign({}, this.state);
    Object.keys(this.state.forecastFormPayload).map(key => {
      if (forecast[key] !== undefined && forecast[key] !== null){
        newState.forecastFormPayload[key].value = forecast[key];
      }
    })
    // console.log('>>>>>>>', newState);
    this.setState({
      newState,
    })
  }

  handleForecastSubmit = (e) => {
    // console.log(this.state.forecastFormPayload);
    // console.log('FORECASTS', this.state.yearly_forecasts);
    let method = 'POST';
    let forecast_id;
    let requestBody = {
      project_finance: this.props.project_finances.id,
      VAT: this.state.forecastFormPayload.VAT.value,
      forecast: this.state.forecastFormPayload.forecast.value,
      year: this.state.forecastFormPayload.year.value.id,
    }
    this.state.yearly_forecasts.map(forecast => {
      if (forecast.year.id === this.state.forecastFormPayload.year.value.id) {
        // console.log('same year!');
        method = 'PATCH';
        forecast_id = forecast.id;
        // console.log(forecast_id);
        requestBody = {
          VAT: this.state.forecastFormPayload.VAT.value,
          forecast: this.state.forecastFormPayload.forecast.value,
          year: this.state.forecastFormPayload.year.value.id,
        }
      }
    })
    // console.log(method);
    // console.log(this.props, requestBody, method);
    const action = postYearlyForecastAction(this.props, requestBody, method, forecast_id);
    this.props.dispatch(action);
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
        <YearlyForecastList yearly_forecasts={ this.state.yearly_forecasts } loadForecast={ this.loadForecast }/>
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
  // console.log('--------->', state.project_details.project_finances);
  return {
    project_finances: state.project_details.project_finances,
  }
}

export default withRouter(connect(mapStateToProps)(ProjectFinancesForm));