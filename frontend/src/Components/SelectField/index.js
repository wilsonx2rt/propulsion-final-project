import React, { Component } from 'react';
import { connect } from 'react-redux';

var rand = require("random-key");

/* 
  Example of the SelectField component
<SelectField 
  className='project-data-form'
  required='True'
  name='radar_portfolio'
  placeholder='Radar oder Projektportfolio'
  dropdownOptions=['Item 1', 'Item 2', 'Item 3']
  updateParentState={ this.someFunction }
/> 
*/

class SelectField extends Component{

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      defaultDropdown: [{ id: '', name: ''}],
    }

  }

  componentDidMount = () => {
    this.dropdowns = (this.props.dropdowns[this.props.name] !== undefined) ? [...this.state.defaultDropdown, ...this.props.dropdowns[this.props.name]] : this.state.defaultDropdown;
    let defaultValue = '';
    if (this.props.id > 0) {
      this.dropdowns.map(el => {
        if (el.id === this.props.id) {
          defaultValue = el.name;
        }
        return el;
      })
    }
    this.setState({
      value: defaultValue,
    })
  }

  handleChange = (e) => {
    const returnObject = this.dropdowns.filter(el => el.name===e.target.value)[0];
    this.setState({
      value: e.target.value,
    })
    this.props.updateParentState([this.props.name, returnObject])
  }

  render() {
    // Check if the state has been already set up. If no, use default empty array, otherwise use dropdowns from the state.
    const dropdowns = (this.props.dropdowns[this.props.name] !== undefined) ? [...this.state.defaultDropdown, ...this.props.dropdowns[this.props.name]] : this.state.defaultDropdown;
    return (
      <div className={ this.props.className + '__input-container generic-form__input-container' } >
        <label className='generic-form__input-label'>{ this.props.placeholder }{ this.props.required === 'true' ? <span>*</span> : '' }</label>
        <select name={ this.props.name } onChange={ this.handleChange } value={ this.state.value } className={ this.props.className + '__select generic-form__input' }>
          {         
              dropdowns.map(el => {
                  return <option key={ rand.generate(10) } value={ el.name } >{ el.name }</option>
              })
          }
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    dropdowns: state.dropdowns
  }
}

export default connect(mapStateToProps)(SelectField);