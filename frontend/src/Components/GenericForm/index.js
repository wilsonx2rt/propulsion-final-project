import React, { Component } from "react";
import "./index.css";

import Button from '../Button';
import InputField from '../InputField';
import SelectField from '../SelectField';
import FileUploadField from '../FileUploadField';
import { hideValidationMessage } from '../../helpers';

var rand = require("random-key");

/* <GenericForm
  className='some-class-name'
  payload={ someHugeObject }
  onSubmit={ callbackFunction }
  updateParentState={ someFunction }
/> */

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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('in da submit');
    hideValidationMessage();
    this.props.onSubmit(e);
  }

  render() {
    // console.log(this.props);
    // console.log('>>>>>>>', this.props.payload);
    return (
        <form className={ this.props.className + ' generic-form' } onSubmit={ this.handleSubmit } noValidate>
        <h2 className={ this.props.className + '__generic-form-title' }>{ this.props.title }</h2>
        <div className={ this.props.className + ' generic-form-input-container' } >
        {
          Object.keys(this.props.payload).map( index => {
            if(index !== 'form_settings'){
              if (this.props.payload[index].type === 'input') {
                return (
                  <InputField 
                    key={ rand.generate(10) }
                    className={ this.props.className}
                    required={ this.props.payload[index].required }
                    type={ this.props.payload[index].inputType }
                    name={ index }
                    placeholder={ this.props.payload[index].placeholder }
                    updateParentState={ this.handleChange }
                    value={ this.props.payload[index].value }
                  />
                )
              }
              else if (this.props.payload[index].type === 'dropdown') {
                return (
                  <SelectField 
                    key={ rand.generate(10) }
                    className={ this.props.className }
                    required={ this.props.payload[index].required }
                    name={ index }
                    placeholder={ this.props.payload[index].placeholder }
                    updateParentState={ this.handleChange }
                    id={ Object.keys(this.props.payload[index].value).length ? this.props.payload[index].value.id : -1 }
                  /> 
                )
              }
              else if (this.props.payload[index].type === 'file') {
                return (
                  <FileUploadField 
                    key={ rand.generate(10) }
                    className={ this.props.className }
                    required={ this.props.payload[index].required }
                    name={ index }
                    placeholder={ this.props.payload[index].placeholder }
                    updateParentState={ this.handleChange }
                  /> 
                )
              }
            }
            return '';
          })
        }
        </div>
        {
          Object.keys(this.props.payload).map( index => {
            if(index === 'form_settings'){
              if (this.props.payload.form_settings.type === 'project_data_form') {
                return (
                  <div key={ rand.generate(10) } className="project-data-form__btn-container">
                    <Button className={ this.props.className + '__button' } btnText="Save" type='submit' />
                    <Button className={ this.props.className + '__button' } btnText="Next" />
                  </div>
                )
              }
              else if (this.props.payload.form_settings.type === 'login_form') {
                return (
                  <Button 
                    key={ rand.generate(10) }
                    btnText="Login" 
                    type='submit'
                    className={ this.props.className + '__button' }
                  />
                )
              }
              else if (this.props.payload.form_settings.type === 'yearly_forecast_form') {
                return (
                  <Button 
                    key={ rand.generate(10) }
                    btnText="Save" 
                    type='submit'
                    className={ this.props.className + '__button' }
                  />
                )
              }
            }
        })
        }
        </form>
    )
    ;
  }
}

export default GenericForm;