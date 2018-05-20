import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import GenericForm from '../GenericForm';
import { updateManagerActionCreator } from '../../store/actions/managerActions';
import { fetchManagerOverviewActionCreator } from '../../store/actions/fetchManagerOverview';

class ProjectManagerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formPayload: {
        form_settings: { type: 'manager_details_form' },
        first_name: {
          value: '',
          type: 'input',
          required: 'true',
          placeholder: 'Vorname'
        },
        last_name: {
          value: '',
          type: 'input',
          required: 'true',
          placeholder: 'Name'
        },
        email: {
          value: '',
          type: 'input',
          required: 'true',
          placeholder: 'Email'
        }
      }
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    const newState = { ...prevState };
    if (nextProps.managerDetails && nextProps.managerDetails !== null) {
      newState.formPayload.first_name.value =
        nextProps.managerDetails.first_name;
      newState.formPayload.last_name.value = nextProps.managerDetails.last_name;
      newState.formPayload.email.value = nextProps.managerDetails.email;
      return newState;
    }
    return null;
  };

  handleSubmit = (e) => {
    let action = updateManagerActionCreator(this.state.formPayload, this.props);
    this.props.dispatch(action);
    // target accordion inner container to close on submit
    const form = e.target;
    const formWrapper = form.parentElement;
    const innerContainer = formWrapper.parentElement;
    // hide on submit
    innerContainer.classList.toggle('accordion-segment__inner-container-hidden')    
  };

  handleChange = input_array => {
    this.state.formPayload[input_array[0]].value = input_array[1];
  };

  render() {
    // this.props.managerDetails ? console.log(this.props.managerDetails): null
    return (
      <div className="manager-details-form-wrapper">
        <GenericForm
          className="manager-details-form"
          payload={this.state.formPayload}
          onSubmit={this.handleSubmit}
          updateParentState={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(ProjectManagerForm);
