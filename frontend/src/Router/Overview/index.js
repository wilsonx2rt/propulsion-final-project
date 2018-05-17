import React, { Component } from 'react'
import SearchBox from '../../Components/SearchBox';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';
import { fetchOverviewActionCreator } from '../../store/actions/fetchOverview'

class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
       projects: {loading: 'Loading...'}
    }
  }

  componentDidMount = () => {
    const action = fetchOverviewActionCreator(this.props);
    this.props.dispatch(action);
    console.log('from the lifecycle', this.props)
  }
  
  render() {
    console.log('from the render', this.props);
    return (
      <div>
        <SearchBox />
        <div className='overview__projects--wrapper'>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    state
  }
}

export default withRouter(connect(mapStateToProps)(Overview));