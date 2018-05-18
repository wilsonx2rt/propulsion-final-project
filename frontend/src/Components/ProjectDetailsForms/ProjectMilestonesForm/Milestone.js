import React, { Component } from 'react';

class Milestone extends Component{
  constructor(props){
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.loadMilestone(this.props.milestone);
  }

  render(){
    // console.log(this.props.milestone);
    return (
      <li onClick={ this.handleClick }>
        <a href=''>
          { 
            `Jahr: ${this.props.milestone.year.name} | 
            Woche: ${this.props.milestone.milestone_calendar_week.name } | 
            Inhalt: ${this.props.milestone.milestone_value ? this.props.milestone.milestone_value.name : this.props.milestone.milestone_value } | 
            Tendenz: ${this.props.milestone.tendency ? this.props.milestone.tendency.name : this.props.milestone.tendency} | 
            Einfluss externe Faktoren: ${this.props.milestone.external_factors} | 
            Kommunication: ${this.props.milestone.communications}` 
          }
        </a>
      </li>
    )
  }
}

export default Milestone;