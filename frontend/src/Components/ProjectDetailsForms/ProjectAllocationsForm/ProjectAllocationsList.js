import React, { Component } from 'react';
import ProjectAllocation from './ProjectAllocation';

var rand = require("random-key");

class ProjectAllocationsList extends Component {

  loadAllocation = (allocation) => {
    this.props.loadAllocation(allocation);
  }

  render() {
    // console.log(this.props.project_allocations);
    return (
      <ul className='project-allocations-list'>
        {
          this.props.project_allocations.map(allocation => {
            return <ProjectAllocation key={ rand.generate(10) } allocation={ allocation } loadAllocation={ this.loadAllocation } />
          })
        }
      </ul>
    )
  }
}

export default ProjectAllocationsList;