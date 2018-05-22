import React, { Component } from 'react';
import { connect } from 'react-redux';
import PMItem from './PMItem';

var rand = require("random-key");

class PMField extends Component{

  toggleCheckboxes = (item) => {
    this.props.toggleCheckboxes(item);
  }

  render(){
    return(
      <div>
        <h3>{ this.props.name }</h3>
        {
          this.props.all_managers.map(manager => {
            return <PMItem key={ rand.generate(10) } item={ manager } toggleCheckboxes={ this.toggleCheckboxes } current_managers={ this.props.current_managers }/>
          })
        }
      </div>
    )
  }
}

export default PMField;