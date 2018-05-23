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
            <div className="list-item__project-name">{project.name}</div>
            <div className="list-item__project__manager">
              {/* Prevent error if project manager not yet assigned or project assignment object not created */}
              {(project.project_assignment && project.project_assignment.project_management[0])
                ? `${
                    project.project_assignment.project_management[0].first_name
                  }
              -
              ${project.project_assignment.project_management[0].last_name}`
                : 'N/A'}
            </div>
            <div className="list-item__project__manager">
              {/* Prevent error if project status not yet assigned */}
              {project.project_status_phase && project.project_status_phase.name ? project.project_status_phase.name : 'N/A'}
            </div>
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
