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
      value: '' 
    }

    this.myStyle={
      width: '30%',
    }

    this.state.defaultDropdown = [''];
  }

  handleChange = (e) => {
    this.props.updateParentState([this.props.name, e.target.value])
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    // Check if the state has been already set up. If no, use default empty array, otherwise use dropdowns from the state.
    const dropdowns = (this.props.dropdowns[this.props.name] !== undefined) ? [...this.state.defaultDropdown, ...this.props.dropdowns[this.props.name]] : this.state.defaultDropdown;
    return (
      <div className={ this.props.className + '__input-container' } style={ this.myStyle }>
        <label>{ this.props.placeholder }{ this.props.required === 'true' ? <span>*</span> : '' }</label>
        <select name={ this.props.name } onChange={ this.handleChange } value={ this.state.value }>
          {         
              dropdowns.map(el => {
                return <option key={ rand.generate(10) } value={ el.name }>{ el.name }</option>
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