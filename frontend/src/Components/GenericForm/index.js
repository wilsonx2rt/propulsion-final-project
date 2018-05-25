import React, { Component } from 'react';
import './index.css';

import Button from '../Button';
import InputField from '../InputField';
import SelectField from '../SelectField';
import FileUploadField from '../FileUploadField';
import { hideValidationMessage } from '../../helpers';

var rand = require('random-key');

// GenericForm expects to get a className property
// GenericForm expects a function onSubmit for action on submition
// GenericForm expects to get a payload object, containing one field 'form_settings" with possible config instructions for the UI of the form,
// and the other fields of the shape 'key': {value: '', type: 'input', required: 'true', placeholder: 'Project Name'},
// Expected options for 'type' are: input, dropdown, file
// Expected options for 'required' is: true, false

class GenericForm extends Component {
  handleChange = input_array => {
    this.props.updateParentState(input_array);
  };

  handleSubmit = e => {
    e.preventDefault();
    hideValidationMessage();
    this.props.onSubmit(e);
  };

  render() {
    // console.log(this.props.payload);
    return (
      <form
        className={this.props.className + ' generic-form'}
        onSubmit={this.handleSubmit}
        noValidate
      >
        <h3
          className={
            this.props.className + '__generic-form-title generic-form-title'
          }
        >
          {this.props.title}
        </h3>
        <div className={this.props.className + ' generic-form-input-container'}>
          {Object.keys(this.props.payload).map(index => {
            if (index !== 'form_settings') {
              if (this.props.payload[index].type === 'input') {
                return (
                  <InputField
                    key={rand.generate(10)}
                    className={this.props.className}
                    required={this.props.payload[index].required}
                    type={this.props.payload[index].inputType}
                    name={index}
                    placeholder={this.props.payload[index].placeholder}
                    updateParentState={this.handleChange}
                    value={this.props.payload[index].value}
                    readonly={this.props.payload[index].readonly}
                  />
                );
              } else if (this.props.payload[index].type === 'dropdown') {
                return (
                  <SelectField
                    key={rand.generate(10)}
                    className={this.props.className}
                    required={this.props.payload[index].required}
                    name={index}
                    placeholder={this.props.payload[index].placeholder}
                    updateParentState={this.handleChange}
                    id={
                      this.props.payload[index] &&
                      Object.keys(this.props.payload[index].value).length
                        ? this.props.payload[index].value.id
                        : ''
                    }
                  />
                );
              } else if (this.props.payload[index].type === 'file') {
                return (
                  <FileUploadField
                    key={rand.generate(10)}
                    className={this.props.className}
                    required={this.props.payload[index].required}
                    name={index}
                    placeholder={this.props.payload[index].placeholder}
                    updateParentState={this.handleChange}
                  />
                );
              }
            }
            return null;
          })}
        </div>
        {Object.keys(this.props.payload).map(index => {
          if (index === 'form_settings') {
            if (
              this.props.payload.form_settings.type === 'project_data_form' ||
              this.props.payload.form_settings.type === 'yearly_forecast_form'
            ) {
              return (
                <div
                  key={ rand.generate(10) }
                  className="project-data-form__btn-container generic-form__button-container"
                >
                  <Button
                    className={
                      this.props.className + '__button generic-form__button'
                    }
                    btnText="Save"
                    type="submit"
                  />
                </div>
              );
            } else if (this.props.payload.form_settings.type === 'login_form') {
              return (
                <div
                  key={ rand.generate(10) }
                  className="project-data-form__btn-container generic-form__button-container"
                >
                  <Button
                    key={rand.generate(10)}
                    btnText="Login"
                    type="submit"
                    className={
                      this.props.className + '__button generic-form__button'
                    }
                  />
                </div>
              );
            } else if (this.props.payload.form_settings.type === 'manager_details_form') {
              return (
                <div 
                  className={ this.props.className + "__button-container generic-form__buttons-container"}
                  key={rand.generate(10)}
                >
                  <Button
                    btnText="Speichern"
                    type="submit"
                    className={
                      this.props.className + '__button generic-form__button'
                    }
                  />
                  {!this.props.create ? (
                    <Button
                      btnText="Löschen"
                      type="button"
                      handleClick={this.props.onDelete}
                      className={
                        this.props.className + '__button generic-form__button--delete'
                      }
                    />
                  ) : null}
                </div>
              );
            } else if (
              this.props.payload.form_settings.type ===
              'project_data_form_nonadmin'
            ) {
              return '';
            }
          }
          return null;
        })}
      </form>
    );
  }
}

export default GenericForm;
