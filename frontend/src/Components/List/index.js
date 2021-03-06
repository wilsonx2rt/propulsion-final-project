import React, { Component } from 'react';
import './index.css';

import ListItem from '../ListItem';

class List extends Component {
  render() {
    if (this.props.overview) {
      return (
        <div className="list__wrapper">
          <ul className="no-style">
            {this.props.type === 'projects'
              ? this.props.overview.projectOverview.map((project, index) => {
                  return (
                    <ListItem
                      key={index}
                      project={project}
                      projectID={project.id}
                    />
                  );
                })
              : this.props.overview.managerOverview.map((manager, index) => {
                  return (
                    <ListItem
                      key={index}
                      manager={manager}
                      managerID={manager.id}
                    />
                  );
                })}
          </ul>
        </div>
      );
    } else return null;
  }
}

export default List;
