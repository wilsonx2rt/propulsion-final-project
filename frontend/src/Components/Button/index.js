import React, { Component } from 'react'
import './index.css'

class Button extends Component{

  handleClick = (e) => {
    if (this.props.type !== 'submit'){
      e.preventDefault();
      this.props.handleClick(e);

    }
  }

  render(){
    return (
      <button className={ this.props.className } type={ this.props.type } onClick={ this.handleClick }>
        {this.props.btnText}
      </button>
    )
  }
}

export default Button;