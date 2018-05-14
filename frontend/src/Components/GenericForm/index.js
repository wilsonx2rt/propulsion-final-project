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
  constructor(props) {
    super(props);
    this.dropdownOptions = ['--Default--', 'Item 1', 'Item 2', 'Item 3'];
  }

  handleChange = input_array => {
    this.props.updateParentState(input_array);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('in da submit');
    hideValidationMessage();
    this.props.onSubmit();
  }

  render() {
    return (
        <form id={ this.props.className } onSubmit={ this.handleSubmit } noValidate>
        {
          Object.keys(this.props.payload).map( index => {
            if(index !== 'form_settings'){
              if (this.props.payload[index].type === 'input') {
                return (
                  <InputField 
                    key={ rand.generate(10) }
                    className={ this.props.className }
                    required={ this.props.payload[index].required }
                    type={ this.props.payload[index].inputType }
                    name={ index }
                    placeholder={ this.props.payload[index].placeholder }
                    updateParentState={ this.handleChange }
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
                    dropdownOptions={ this.dropdownOptions }
                    updateParentState={ this.handleChange }
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
            return ;
          })
        }
        {
          Object.keys(this.props.payload).map( index => {
            if(index === 'form_settings'){
              if (this.props.payload.form_settings.type === 'project_data_form') {
                return (
                  <div className="project-data-form__btn-container">
                    <Button className={ this.props.className + '__btn' } btnText="Save" type='submit' />
                    <Button className={ this.props.className + '__btn' } btnText="Next" />
                  </div>
                )
              }
              else if (this.props.payload.form_settings.type === 'login_form') {
                return (
                  <Button 
                    id="login-form__button" 
                    btnText="Login" 
                    type='submit'
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