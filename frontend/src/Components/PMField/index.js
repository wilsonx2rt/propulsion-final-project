import React, { Component } from 'react';
import PMItem from './PMItem';
import './index.css';

var rand = require("random-key");

class PMField extends Component{

  toggleCheckboxes = (item) => {
    this.props.toggleCheckboxes(item);
  }

  render(){
    return(
      <div className='project-assignment-form__project-management-container'>
        <h3>{ this.props.name }</h3>
        {
          this.props.all_managers.map(manager => {
            if (this.props.isAdmin) {
              return <PMItem key={ rand.generate(10) } item={ manager } toggleCheckboxes={ this.toggleCheckboxes } current_managers={ this.props.current_managers }/>
            }
            else {
              return <div key={ rand.generate(10) }>{ manager.name } </div>
            }
          })
        }
      </div>
    )
  }
}

export default PMField;