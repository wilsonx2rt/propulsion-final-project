import React from 'react';
import './index.css';

export default props => {
  if (props.project != {}) {
    let project = props.project;
    if (project) {
      return (
        <li className="list-item">
          <span>{project.name}</span>
          <span>
            {project.project_assignment.project_management[0].username}
          </span>
          <span>{project.project_status_phase.name}</span>
        </li>
      );
    }
  }
  if (props.manager != {}) {
    let manager = props.manager;
    if (manager) {
      console.log(manager)
      return (
        <li className="list-item">
          <span>{manager.username}</span>
        </li>
      );
    }
  }
};
