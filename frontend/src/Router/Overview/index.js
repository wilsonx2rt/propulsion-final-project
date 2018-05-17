import React, { Component } from 'react';
import SearchBox from '../../Components/SearchBox';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';
import { fetchProjectOverviewActionCreator } from '../../store/actions/fetchProjectOverview';
import { fetchManagerOverviewActionCreator } from '../../store/actions/fetchManagerOverview';
import List from '../../Components/List';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: {
        projectOverview: [],
        managerOverview: []
      }
    };
  }

  componentDidMount = () => {
    let action = fetchProjectOverviewActionCreator(this.props);
    this.props.dispatch(action);
    // console.log("from the lifecycle", this.props);
    action = fetchManagerOverviewActionCreator(this.props);
    this.props.dispatch(action);
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    const newState = { ...prevState };
    if (nextProps.overview.projectOverview !== undefined) {
      if (
        prevState.overview.projectOverview !==
          nextProps.overview.projectOverview &&
        nextProps.overview.projectOverview.length !== 0
      ) {
        newState.overview.projectOverview = [
          ...nextProps.overview.projectOverview
        ];
      }
    }
    if (nextProps.overview.managerOverview !== undefined) {
      if (
        prevState.overview.managerOverview !==
          nextProps.overview.managerOverview &&
        nextProps.overview.managerOverview.length !== 0
      ) {
        newState.overview.managerOverview = [
          ...nextProps.overview.managerOverview
        ];
      }
      return newState;
    }
    return null;
  };

  render() {
    return (
      <div>
        <SearchBox />
        <div className="overview--wrapper">
          <div className="overview__projects--wrapper">
            <List type="projects" overview={this.state.overview} />
          </div>
          <div className="overview__managers--wrapper">
            <List type="manager"  overview={this.state.overview}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    overview: {
      projectOverview: state.projectOverview,
      managerOverview: state.managerOverview
    }
  };
};

export default withRouter(connect(mapStateToProps)(Overview));
