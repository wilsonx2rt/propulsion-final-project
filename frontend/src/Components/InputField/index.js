import React, { Component } from 'react';
import { connect } from 'react-redux';

/* 
  Example of the InputField component
<InputField 
  className='project-data-form'
  required='True'
  type='text'
  name='name'
  placeholder='Project Name'
  onChange={ this.handleChange }
  value={ this.state.name }
  updateParentState={ this.someFunction }
> 
*/

class InputField extends Component{

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      defaultDropdown: [{ id: '', name: ''}],
    }

  }

  componentDidMount = () => {
    const dropdowns = this.props.dropdowns[this.props.name] ? [...this.state.defaultDropdown, ...this.props.dropdowns[this.props.name]] : this.state.defaultDropdown;
    let defaultValue = '';
    if (typeof this.props.value === 'object') {
      dropdowns.map(el => {
        if (el.id === this.props.value.id) {
          defaultValue = el.name;
        }
        return el;
      })
    }
    else {
      defaultValue = this.props.value;
    }
    this.setState({
      value: defaultValue,
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
    this.props.updateParentState([this.props.name, e.target.value]);
  }

  render() {
    return (
      <div className={ this.props.className + '__input-container generic-form__input-container' } >
        <p className={ this.props.className + '__validation-message generic-validation-message hidden-element'} >{ 'Incorrect ' + this.props.placeholder }</p>
        <label className='generic-form__input-label'>{ this.props.placeholder }{ this.props.required === 'true' ? <span>*</span> : '' }</label>
        <input
          className={ this.props.readonly ? this.props.className + '__input generic-form__input generic-form__input--inactive' :  this.props.className + '__input generic-form__input generic-form__input'}
          type={ this.props.type }
          name={ this.props.name }
          placeholder={ this.props.placeholder }
          onChange={ this.handleChange }
          value={ this.state.value }
          disabled={ this.props.readonly }
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    dropdowns: state.dropdowns
  }
}

export default connect(mapStateToProps)(InputField);