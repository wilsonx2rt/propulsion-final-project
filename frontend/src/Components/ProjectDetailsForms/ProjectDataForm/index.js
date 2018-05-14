import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./index.css";

import Button from '../../Button';
import InputField from '../../InputField';
import SelectField from '../../SelectField';
import FileUploadField from '../../FileUploadField';
import { hideValidationMessage } from '../../../helpers';

class ProjectDataForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'name': {value: '', type: 'input', required: 'true', placeholder: 'Project Name'},
      'radar_portfolio': {value: '', type: 'dropdown', required: 'false', placeholder: 'Radar oder Projektportfolio'},
      'business_proposal': {value: '', type: 'dropdown', required: 'false', placeholder: 'Geschäftsantrag'},
      'project_type': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projekttyp'},
      'project_nature': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projekttart'},
      'strategic_importance': {value: '', type: 'input', required: 'false', placeholder: 'Strategische Bedeutung'},
      'operational_urgency': {value: '', type: 'input', required: 'false', placeholder: 'Operative Dringlichkeit'},
      'political_significance': {value: '', type: 'dropdown', required: 'false', placeholder: 'Politische Bedeutung'},
      'project_priority': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projektpriorität'},
      'project_character': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projektcharakter (Projektbezogen)'},
      'control_cycle': {value: '', type: 'dropdown', required: 'false', placeholder: 'Steuerungszyklus'},
      'risk_assessment': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projekt-Risikobeurteilung'},
      'project_goal': {value: '', type: 'input', required: 'false', placeholder: 'Projektziel'},
      'project_handbook': {value: '', type: 'input', required: 'false', placeholder: 'Projekthandbuch'},
      'project_handbook_file': {value: '', type: 'file', required: 'false', placeholder: 'Handbuch data'},
      'e3_number': {value: '', type: 'input', required: 'false', placeholder: 'E3-Nummer'},
      'business_category': {value: '', type: 'input', required: 'false', placeholder: 'Geschäftskategorie'},
      'service_nature': {value: '', type: 'input', required: 'false', placeholder: 'Leistungsart'},
      'invoiceability': {value: '', type: 'input', required: 'false', placeholder: 'Verrechenbarkeit'},
      'business_number': {value: '', type: 'input', required: 'false', placeholder: 'Geschäftsnummer'},
      'project_status_phase': {value: '', type: 'dropdown', required: 'false', placeholder: 'Projektstatus/Projektphase'},
      'comment': {value: '', type: 'input', required: 'false', placeholder: 'Bemerkung'},
    };
  }

  handleChange = input_array => {
    // input_array is of type [field_name, value]
    // Needs to be done in this way to update state of the component based on the state of the child.
    // Input is handled by the child.
    const newState = Object.assign(this.state, {});
    const newFieldState = Object.assign(newState[input_array[0]], {});
    newFieldState.value = input_array[1];
    newState[input_array[0]] = newFieldState;
    this.setState(
      newState
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    hideValidationMessage();
    // const action = loginAction(this.state, this.props);
    // this.props.dispatch(action);
    // document.querySelector('#login-form').reset();
  }

  render() {
    console.log(this.state);
    return (
      <div className="project-data-form-wrapper">
        <form id="project-data-form" onSubmit={ this.handleSubmit } noValidate>
          <p className='project-data-form__validation-message generic-validation-message hidden-element'>Something went wrong</p>
          <InputField 
            className='project-data-form'
            required={ this.state.name.required }
            type='text'
            name={ 'name' }
            placeholder={ this.state.name.placeholder }
            updateParentState={ this.handleChange }
          />
          <SelectField 
            className='project-data-form'
            required='True'
            name='radar_portfolio'
            placeholder='Radar oder Projektportfolio'
            dropdownOptions={ ['--Default--', 'Item 1', 'Item 2', 'Item 3'] }
            updateParentState={ this.handleChange }
          /> 
          <div className='project-data-form__input-container'>
            <label>Geschäftsantrag</label>
            <select name='business_proposal' onChange={ this.handleChange } value={ this.state.business_proposal }>
              {/* {
                Object.keys(this.props.categories).map(index => {
                  return <option key={ rand.generate(10) } value={ this.props.categories[index] }>{ this.props.categories[index] }</option>
                })
              } */}
              <option value='default'></option>
              <option value='Menu item 1'>Menu item 1</option>
              <option value='Menu item 2'>Menu item 2</option>
              <option value='Menu item 3'>Menu item 3</option>
            </select>
          </div>
          <div className='project-data-form__input-container'>
            <label>Projekttyp</label>
            <select name='project_type' onChange={ this.handleChange } value={ this.state.project_type }>
              {/* {
                Object.keys(this.props.categories).map(index => {
                  return <option key={ rand.generate(10) } value={ this.props.categories[index] }>{ this.props.categories[index] }</option>
                })
              } */}
              <option value='default'></option>
              <option value='Menu item 1'>Menu item 1</option>
              <option value='Menu item 2'>Menu item 2</option>
              <option value='Menu item 3'>Menu item 3</option>
            </select>
          </div>
          <div className='project-data-form__input-container'>
            <label>Projekttart</label>
            <select name='project_nature' onChange={ this.handleChange } value={ this.state.project_nature }>
              {/* {
                Object.keys(this.props.categories).map(index => {
                  return <option key={ rand.generate(10) } value={ this.props.categories[index] }>{ this.props.categories[index] }</option>
                })
              } */}
              <option value='default'></option>
              <option value='Menu item 1'>Menu item 1</option>
              <option value='Menu item 2'>Menu item 2</option>
              <option value='Menu item 3'>Menu item 3</option>
            </select>
          </div>
          <div className='project-data-form__input-container'>
            <label>Strategische Bedeutung</label>
            <input
              className="project-data-form__input"
              type="text"
              name="strategic_importance"
              placeholder="Strategische Bedeutung"
              onChange={this.handleChange}
              value={ this.state.strategic_importance }
            />
          </div>
          <div className='project-data-form__input-container'>
            <label>Operative Dringlichkeit</label>
            <input
              className="project-data-form__input"
              type="text"
              name="operational_urgency"
              placeholder="Operative Dringlichkeit"
              onChange={this.handleChange}
              value={ this.state.operational_urgency }
            />
          </div>
          <div className='project-data-form__input-container'>
            <label>Politische Bedeutung</label>
            <select name='political_significance' onChange={ this.handleChange } value={ this.state.political_significance }>
              {/* {
                Object.keys(this.props.categories).map(index => {
                  return <option key={ rand.generate(10) } value={ this.props.categories[index] }>{ this.props.categories[index] }</option>
                })
              } */}
              <option value='default'></option>
              <option value='Menu item 1'>Menu item 1</option>
              <option value='Menu item 2'>Menu item 2</option>
              <option value='Menu item 3'>Menu item 3</option>
            </select>
          </div>
          <div className='project-data-form__input-container'>
            <label>Projektpriorität (L)</label>
            <select name='project_priority' onChange={ this.handleChange } value={ this.state.project_priority }>
              {/* {
                Object.keys(this.props.categories).map(index => {
                  return <option key={ rand.generate(10) } value={ this.props.categories[index] }>{ this.props.categories[index] }</option>
                })
              } */}
              <option value='default'></option>
              <option value='Menu item 1'>Menu item 1</option>
              <option value='Menu item 2'>Menu item 2</option>
              <option value='Menu item 3'>Menu item 3</option>
            </select>
          </div>
          <div className='project-data-form__input-container'>
            <label>Projektcharakter (Projektbezogen)</label>
            <select name='project_character' onChange={ this.handleChange } value={ this.state.project_character }>
              {/* {
                Object.keys(this.props.categories).map(index => {
                  return <option key={ rand.generate(10) } value={ this.props.categories[index] }>{ this.props.categories[index] }</option>
                })
              } */}
              <option value='default'></option>
              <option value='Menu item 1'>Menu item 1</option>
              <option value='Menu item 2'>Menu item 2</option>
              <option value='Menu item 3'>Menu item 3</option>
            </select>
          </div>
          <div className='project-data-form__input-container'>
            <label>Steuerungszyklus (L)</label>
            <select name='control_cycle' onChange={ this.handleChange } value={ this.state.control_cycle }>
              {/* {
                Object.keys(this.props.categories).map(index => {
                  return <option key={ rand.generate(10) } value={ this.props.categories[index] }>{ this.props.categories[index] }</option>
                })
              } */}
              <option value='default'></option>
              <option value='Menu item 1'>Menu item 1</option>
              <option value='Menu item 2'>Menu item 2</option>
              <option value='Menu item 3'>Menu item 3</option>
            </select>
          </div>
          <div className='project-data-form__input-container'>
            <label>Projekt-Risikobeurteilung</label>
            <select name='risk_assessment' onChange={ this.handleChange } value={ this.state.risk_assessment }>
              {/* {
                Object.keys(this.props.categories).map(index => {
                  return <option key={ rand.generate(10) } value={ this.props.categories[index] }>{ this.props.categories[index] }</option>
                })
              } */}
              <option value='default'></option>
              <option value='Menu item 1'>Menu item 1</option>
              <option value='Menu item 2'>Menu item 2</option>
              <option value='Menu item 3'>Menu item 3</option>
            </select>
          </div>
          <div className='project-data-form__input-container'>
            <label>Projektziel</label>
            <input
              className="project-data-form__input"
              type="text"
              name="project_goal"
              placeholder="Projektziel"
              onChange={ this.handleChange }
              value={ this.state.project_goal }
            />
          </div>
          <div className='project-data-form__input-container'>
            <label>Projekthandbuch</label>
            <input
              className="project-data-form__input"
              type="text"
              name="project_handbook"
              placeholder="Projekthandbuch"
              onChange={ this.handleChange }
              value={ this.state.project_handbook }
            />
          </div>
          <FileUploadField 
            className='project-data-form'
            required='True'
            name='project_handbook_file'
            placeholder='Handbuch data'
            updateParentState={ this.handleChange }
          /> 
          <div className='project-data-form__input-container'>
            <label>E3 Nummer</label>
            <input
              className="project-data-form__input"
              type="text"
              name="e3_number"
              placeholder="E3 Nummer"
              onChange={ this.handleChange }
              value={ this.state.e3_number }
            />
          </div>
          <div className='project-data-form__input-container'>
            <label>Geschäftskategorie</label>
            <input
              className="project-data-form__input"
              type="text"
              name="business_category"
              placeholder="Geschäftskategorie"
              onChange={ this.handleChange }
              value={ this.state.business_category }
            />
          </div>
          <div className='project-data-form__input-container'>
            <label>Leistungsart</label>
            <input
              className="project-data-form__input"
              type="text"
              name="service_nature"
              placeholder="Leistungsart"
              onChange={ this.handleChange }
              value={ this.state.service_nature }
            />
          </div>
          <div className='project-data-form__input-container'>
            <label>Verrechenbarkeit</label>
            <input
              className="project-data-form__input"
              type="text"
              name="invoiceability"
              placeholder="Verrechenbarkeit"
              onChange={ this.handleChange }
              value={ this.state.invoiceability }
            />
          </div>
          <div className='project-data-form__input-container'>
            <label>Geschäftsnummer</label>
            <input
              className="project-data-form__input"
              type="text"
              name="business_number"
              placeholder="Geschäftsnummer"
              onChange={ this.handleChange }
              value={ this.state.business_number }
            />
          </div>
          <div className='project-data-form__input-container'>
            <label>Projektstatus/Projektphase</label>
            <select name='project_status_phase' onChange={ this.handleChange } value={ this.state.project_status_phase }>
              {/* {
                Object.keys(this.props.categories).map(index => {
                  return <option key={ rand.generate(10) } value={ this.props.categories[index] }>{ this.props.categories[index] }</option>
                })
              } */}
              <option value='default'></option>
              <option value='Menu item 1'>Menu item 1</option>
              <option value='Menu item 2'>Menu item 2</option>
              <option value='Menu item 3'>Menu item 3</option>
            </select>
          </div>
          <div className='project-data-form__input-container'>
            <label>Bemerkung</label>
            <input
              className="project-data-form__input"
              type="text"
              name="comment"
              placeholder="Bemerkung"
              onChange={ this.handleChange }
              value={ this.state.comment }
            />
          </div>
          <div className="project-data-form__btn-container">
            <Button className="project-data-form__btn" btnText="Save" />
            <Button className="project-data-form__btn" btnText="Next" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps)(ProjectDataForm));