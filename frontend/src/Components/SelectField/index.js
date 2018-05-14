import React, { Component } from 'react';


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
  }

  handleChange = (e) => {
    this.props.updateParentState([this.props.name, this.state.value])
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className={ this.props.className + '__input-container' }>
        <label>{ this.props.placeholder }{ this.props.required === 'true' ? <span>*</span> : '' }</label>
        <select name={ this.props.name } onChange={ this.handleChange } value={ this.state.value }>
          {
            Object.keys(this.props.dropdownOptions).map(index => {
              return <option key={ rand.generate(10) } value={ this.props.dropdownOptions[index] }>{ this.props.dropdownOptions[index] }</option>
            })
          }
        </select>
      </div>
    )
  }
}
export default SelectField;