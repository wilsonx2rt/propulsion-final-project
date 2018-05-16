import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericForm from '../../GenericForm';
import { getProjectDetailsAction } from '../../../store/actions/getProjectDetailsAction';
import { CLIENT_RENEG_LIMIT } from "tls";

class ProjectFinancesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPayload: {
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
        
      },

      project_allocations: [],
    };
  }

  componentDidMount = () => {
    const action = getProjectDetailsAction(this.props);
    this.props.dispatch(action);
  }

  // static getDerivedStateFromProps = (nextProps, prevState) => {
  //   // if we get updated allocations which are not an empty object...
  //   const newState = Object.assign({}, prevState);
  //   if(prevState.project_allocations !== nextProps.project_allocations && Object.keys(nextProps.project_allocations).length) {
  //     console.log('NEW ALLOCATIONS!');
  //     newState.project_allocations = nextProps.project_allocations;
  //   }
  //   return newState;
  // }

  handleChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];

  };

  // loadAllocation = (allocation) => {
  //   // console.log('>>>>>>>>',allocation);
  //   const newState = Object.assign({}, this.state);
  //   Object.keys(this.state.formPayload).map(key => {
  //     if (allocation[key] !== undefined && allocation[key] !== null){
  //       newState.formPayload[key].value = allocation[key];
  //     }
  //   })
  //   // console.log('>>>>>>>', newState);
  //   this.setState({
  //     newState,
  //   })
  // }

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
          payload={ this.state.formPayload }
          onSubmit={ this.handleSubmit }
          updateParentState={ this.handleChange }
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('--------->',state);
  return {

  }
}

export default withRouter(connect(mapStateToProps)(ProjectFinancesForm));