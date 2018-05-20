import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchManagerActionCreator } from '../../store/actions/managerActions';
import './index.js';
import ProjectManagerForm from '../../Components/ProjectManagerForm';

class ManagerDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      managerDetails: {
        id: null,
        first_name: '',
        last_name: '',
        email: ''
      }
    };
  }

  componentDidMount = () => {
    const action = fetchManagerActionCreator(this.props);
    this.props.dispatch(action);
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    const newState = { ...prevState };
    if (
      nextProps.managerDetails &&
      Object.keys(nextProps.managerDetails).length !== 0
    ) {
      newState.managerDetails.id = nextProps.managerDetails.id;
      newState.managerDetails.first_name = nextProps.managerDetails.first_name;
      newState.managerDetails.last_name = nextProps.managerDetails.last_name;
      newState.managerDetails.email = nextProps.managerDetails.email;
      return newState;
    }
    return null;
  };

  render() {
    return (
      <div>
        <ProjectManagerForm
          managerDetails={
            /* avoid error if managerDetails not existing at render time */
            this.state.managerDetails.id ? this.state.managerDetails : null
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    managerDetails: state.managerDetails
  };
};

export default connect(mapStateToProps)(ManagerDetails);
