import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import SearchBox from '../../Components/SearchBox';
import AccordionSegment from '../../Components/AccordionSegment';
import ProjectManagerForm from '../../Components/ProjectManagerForm';
import Button from '../../Components/Button';
import plus from '../../assets/plus.png';
import Footer from '../../Components/Footer';
import { fetchProjectOverviewActionCreator } from '../../store/actions/fetchProjectOverview';
import { fetchManagerOverviewActionCreator } from '../../store/actions/fetchManagerOverview';
import { validateTokensAction } from '../../store/actions/validateTokens';
import { createNewProjectActionCreator } from '../../store/actions/createProject';
import List from '../../Components/List';

var rand = require('random-key');

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: {
        projectOverview: [],
        managerOverview: []
      },
      visible: 'new-project-manager__inner-container--hidden',
      isAdmin: null,
      currentUserFetch: false,
      newProjectName: ''
    };
  }

  componentDidMount = () => {
    const action = validateTokensAction(this.props);
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
      if (Object.keys(nextProps.currentUser).length !== 0) {
        newState.isAdmin = nextProps.currentUser.user_profile.isAdmin;
        // only fetch once after isAdmin is set to local state
        // to pass actions props where currentUser is not an empty object
        if (!prevState.currentUserFetch) {
          let action = fetchProjectOverviewActionCreator(prevState, nextProps);
          nextProps.dispatch(action);
          action = fetchManagerOverviewActionCreator(nextProps);
          nextProps.dispatch(action);
          newState.currentUserFetch = true;
        }
      }
      return newState;
    }
    return null;
  };

  toggleClass = () => {
    let visible = { ...this.state.visible };
    if (
      this.state.visible === 'new-project-manager__inner-container--hidden'
    ) {
      visible = 'new-project-manager__inner-container';
      this.setState({ visible });
    } else {
      visible = 'new-project-manager__inner-container--hidden';
      this.setState({ visible });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleClick = () => {
    const action = createNewProjectActionCreator(this.state, this.props);
    this.props.dispatch(action);
    document.querySelector('#newProjectName').value = '';
    const newProjectName = '';
    this.setState({
      newProjectName
    });
  };

  render() {
    return (
      <div className="overview__container">
        {/* hide search box if user id non admin */}
        <div className={this.state.isAdmin === true ? '' : 'hidden-element'}>
          <SearchBox />
        </div>
        <div className="overview__top-header">
          <h2>Protfolio-Übersicht</h2>
          <div className="overview__new-project__container">
            <Button handleClick={this.handleClick} btnText="Neues Projekt" className="overview__new-project__button" />
            <input
              className="overview__new-project-input"
              onChange={this.handleChange}
              id="newProjectName"
              type="text"
              placeholder="Projekt Name"
            />
          </div>
        </div>

        <div className="overview--wrapper">
          <div className="overview__projects--wrapper">
            <div className="overview__projects--header">
              <div className="overview__projects--header--project-name">
                Projekt
              </div>
              <div className="overview__projects--header--project-manager">
                Projectleiter
              </div>
              <div className="overview__projects--header--project-status">
                Status
              </div>
            </div>
            <List type="projects" overview={this.state.overview} />
          </div>
          {/* hide PM list if user id non admin */}
          <div
            id="overview__managers--wrapper"
            className={this.state.isAdmin === false ? 'hidden-element' : ''}
          >
            <div className="overview__project-manager--header">
              Projectleiter
            </div>
            <div className="new-project-manager">
              <div
                onClick={this.toggleClass}
                className="new-project-manager__header-wrapper"
              >
                <div className="new-project-manager__header">Neu PL</div>
                <img id="plus" src={plus} alt="plus icon" />
              </div>
              <div className={this.state.visible}>
                <ProjectManagerForm
                  create="true"
                  // set display non on response.ok
                  toggleClass={this.toggleClass}
                />
              </div>
            </div>
            {Object.keys(this.props.overview && this.props.overview.managerOverview).length !== 0
              ? this.props.overview.managerOverview.map((manager, index) => {
                  return (
                    <div key={rand.generate(10)} className="overview__project-manager-accordion">
                      <AccordionSegment
                        AccordionSegmentTitle={`${manager.first_name}-${
                          manager.last_name
                        }`}
                        className='overview__project-manager-accordion'
                      >
                        <ProjectManagerForm managerDetails={manager} />
                      </AccordionSegment>
                    </div>
                  );
                })
              : null}
            {/* {list view w/o dropdown option} */}
            {/* <List type="manager" overview={this.state.overview} /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    overview: {
      projectOverview: state.projectOverview,
      managerOverview: state.managerOverview
    },
    currentUser: state.currentUser,
    tokens: state.tokens
  };
};

export default connect(mapStateToProps)(Overview);
