import React, { Component } from 'react';

class ProjectAllocation extends Component {
  constructor(props){
    super(props);
    this.total_allocation = this.props.allocation.total_allocation !== null ? this.props.allocation.total_allocation : '0'
  }

  handleClilck = (e) => {
    e.preventDefault();
    this.props.loadAllocation(this.props.allocation);
  }

  render(){
    return (
      <li  onClick={ this.handleClilck }><a href=''>{ `${this.props.allocation.year.name} | ${this.props.allocation.quarter.name} | Total allocation: ${this.total_allocation}` }</a></li>
    )
  }
}

export default ProjectAllocation;