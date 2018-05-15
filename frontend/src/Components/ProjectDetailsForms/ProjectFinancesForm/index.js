import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericForm from '../../GenericForm';

class ProjectFinancesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.formPayload = {
      'form_settings': {type: 'project_data_form', },
      'financing': {value: '', type: 'dropdown', required: 'false', placeholder: 'Finanzierungsart / MIP Rubrik'},
      'requirements_assessment': {value: '', type: 'dropdown', required: 'false', placeholder: 'Bedürfnisabklärung'},
      'credit_status': {value: '', type: 'dropdown', required: 'false', placeholder: 'Status Projektkredit'},
      'investment_number': {value: '', type: 'input', inputType: 'text', required: 'true', placeholder: 'Investitions-Nr.'},
      'loan_budget': {value: '', type: 'input', inputType: 'text', required: 'true', placeholder: 'Kredit- /Budgetsumme'},
      'third_party_contributions': {value: '', type: 'input', inputType: 'text', required: 'true', placeholder: 'Beiträge Dritter'},
      'net_expense_previous_years': {value: '', type: 'input', inputType: 'text', required: 'true', placeholder: 'Netto-Ausgaben Vorjahre'},
      'remaining_credit_current_year': {value: '', type: 'input', inputType: 'text', required: 'true', placeholder: 'Kreditrest per 1.1. aktuelles Jahr'},
      'spending_current_year': {value: '', type: 'input', inputType: 'text', required: 'true', placeholder: 'Ist Ausgaben aktuelles Jahr'},
      'forecast_current_year': {value: '', type: 'input', inputType: 'text', required: 'true', placeholder: 'Prognose laufendes Jahr'},
      'remaining_credit_following_year': {value: '', type: 'input', inputType: 'text', required: 'true', placeholder: 'Kreditrest per 1.1. folgendes Jahr'},
      
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

export default withRouter(connect(mapStateToProps)(ProjectFinancesForm));