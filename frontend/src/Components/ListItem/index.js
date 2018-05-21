import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';

class ListItem extends Component {
  handleClickProjects = projectId => {
    this.props.history.push(`/project-details/${this.props.projectID}`);
  };
  handleClickManagers = managerId => {
    this.props.history.push(`/manager-details/${this.props.managerID}`);
  };

  
  render() {
    if (this.props.project !== {}) {
      let project = this.props.project;
      if (project) {
        return (
          <li className="list-item" onClick={this.handleClickProjects}>
            <span>{project.name}</span>
            <span>
              {project.project_assignment.project_management[0].first_name}
              -
              {project.project_assignment.project_management[0].last_name}
            </span>
            <span>{project.project_status_phase.name}</span>
          </li>
        );
      }
    }
    if (this.props.manager !== {}) {
      let manager = this.props.manager;
      if (manager) {
        return (
          <li className="list-item" onClick={this.handleClickManagers}>
            <span>
              {manager.first_name}-{manager.last_name}
            </span>
          </li>
        );
      }
    }
  }
}

export default withRouter(ListItem);