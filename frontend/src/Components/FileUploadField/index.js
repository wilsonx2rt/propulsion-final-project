import React, { Component } from 'react';

/* 
  Example of the FileUploadField component
<FileUploadField 
  className='project-data-form'
  required='True'
  name='radar_portfolio'
  placeholder='Radar oder Projektportfolio'
  updateParentState={ this.someFunction }

/> 
*/

class FileUploadField extends Component{

  constructor(props) {
    super(props);

    this.state = {
      value: '' 
    }

    this.myStyle={
      'width': '30%',
      'display': 'flex',
      'flexDirection': 'column',
    }
  }

  handleChange = (e) => {
    this.props.updateParentState([this.props.name, this.state.value])
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <div className={ this.props.className + '__input-container' } style={ this.myStyle }>
            <label>{ this.props.placeholder }{ this.props.required === 'true' ? <span>*</span> : '' }</label>
            <div className={ this.props.className + '__input__file-upload-container' }>
              <button className={ this.props.className + '__input__file-upload-button' }>Choose a file...</button>
              <input 
                className={ this.props.className + '__input__file' }
                type="file" 
                name={ this.props.name }
                multiple 
                accept=".jpg, .jpeg, .png"/>
            </div>
          </div>
    )
  }
}
export default FileUploadField;