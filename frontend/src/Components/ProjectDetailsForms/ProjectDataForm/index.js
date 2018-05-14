import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./index.css";

import { loginAction } from '../../../store/actions/userActions';
import Button from '../../Button';
import { hideValidationMessage } from '../../../helpers';

class ProjectDataForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'name': '',
      'radar_portfolio': '',
      'business_proposal': '',
      'project_type': '',
      'project_nature': '',
      'strategic_importance': '',
      'operational_urgency': '',
      'political_significance': '',
      'project_priority': '',
      'project_character': '',
      'control_cycle': '',
      'risk_assessment': '',
      'project_goal': '',
      'project_handbook': '',
      'project_handbook_file': '',
      'e3_number': '',
      'business_category': '',
      'service_nature': '',
      'invoiceability': '',
      'business_number': '',
      'project_status_phase': '',
      'comment': '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    hideValidationMessage();
    // const action = loginAction(this.state, this.props);
    // this.props.dispatch(action);
    // document.querySelector('#login-form').reset();
  }

  render() {
    return (
      <div className="project-data-form-wrapper">
        <form id="project-data-form" onSubmit={ this.handleSubmit } noValidate>
          <p className='project-data-form__validation-message generic-validation-message hidden-element'>Something went wrong</p>
          <div className='project-data-form__input-container'>
            <label>Project Name<abbr title="required">*</abbr></label>
            <input
              className="project-data-form__input"
              type="text"
              name="name"
              placeholder="Project Name"
              onChange={this.handleChange}
              value={ this.state.name }
            />
          </div>
          <div className='project-data-form__input-container'>
            <label>Radar oder Projektportfolio</label>
            <select name='radar_portfolio' onChange={ this.handleChange } value={ this.state.radar_portfolio }>
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
          <div className='project-data-form__input-container'>
            <label>Handbuch file</label>
            <div className='project-data-form__input__file-upload-container'>
              <button className='project-data-form__input__file-upload-button'>Choose a file...</button>
              <input 
                className='project-data-form__input__file'
                type="file" 
                name="project_handbook" 
                multiple 
                accept=".jpg, .jpeg, .png"/>
            </div>
          </div>
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