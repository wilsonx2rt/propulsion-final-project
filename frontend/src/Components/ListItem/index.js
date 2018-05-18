import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';

class ListItem extends Component {
  handleClick = projectId => {
    this.props.history.push(`/project-details/${this.props.id}`);
  };
  render() {
    if (this.props.project !== {}) {
      let project = this.props.project;
      if (project) {
        return (
          <h4>
            <li className="list-item" onClick={this.handleClick}>
              <span>{project.name}</span>
              <span>
                {project.project_assignment.project_management[0].first_name}
                -
                {project.project_assignment.project_management[0].last_name}
              </span>
              <span>{project.project_status_phase.name}</span>
            </li>
          </h4>
        );
      }
    }
    if (this.props.manager !== {}) {
      let manager = this.props.manager;
      if (manager) {
        return (
          <li className="list-item">
            <span>{manager.username}</span>
          </li>
        );
      }
    }
  }
}

export default withRouter(ListItem);
