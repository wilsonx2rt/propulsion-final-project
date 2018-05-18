import React, { Component } from 'react';
import Milestone from './Milestone';

var rand = require("random-key");

class MilestonesList extends Component{

  loadMilestone = (milestone) => {
    this.props.loadMilestone(milestone);
  }

  render(){
    return (
      <ul>
        {
          this.props.milestones.map(milestone => {
            return <Milestone key={rand.generate(10)} milestone={ milestone } loadMilestone={ this.loadMilestone }/>
          })
        }
      </ul>
    )
  }
}

export default MilestonesList;