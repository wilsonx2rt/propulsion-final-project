import React, { Component } from 'react';
import SearchBox from '../../Components/SearchBox';
import AccordionSegment from '../../Components/AccordionSegment';
import ProjectManagerForm from '../../Components/ProjectManagerForm';
import { connect } from 'react-redux';
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

  // updateProjectManagerState = (props) => {
  //   newProjectManagerOverview = {}
  // }

  render() {
    return (
      <div>
        <SearchBox />
        <h2>Protfolio-Übersicht</h2>
        <div className="overview--wrapper">
          <div className="overview__projects--wrapper">
            <h3>Projeckten</h3>
            <List type="projects" overview={this.state.overview} />
          </div>
          <div className="overview__managers--wrapper">
            <h3>Projectleitern</h3>
            {Object.keys(this.props.overview.managerOverview).length != 0 ? this.props.overview.managerOverview.map((manager, index) => {
              return (
                <AccordionSegment key={index} AccordionSegmentTitle={`${manager.first_name}-${manager.last_name}`}>
                <ProjectManagerForm managerDetails={manager}/>
                </AccordionSegment>
              )
            }) : null}
            {/* {list view w/o dropdown option} */}
            {/* <List type="manager" overview={this.state.overview} /> */}
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

export default connect(mapStateToProps)(Overview);