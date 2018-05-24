import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { setFilterActionCreator } from '../../store/actions/filterActions';
import { fetchProjectOverviewActionCreator } from '../../store/actions/fetchProjectOverview';
import redBlack from '../../assets/bern-red-black.png';
import x from '../../assets/x.jpeg';
class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterString: ''
    };
  }

  handleChange = e => {
    let filterString = e.target.value;
    this.setState({
      filterString: filterString
    });
    let action = setFilterActionCreator(filterString);
    this.props.dispatch(action);
    action = fetchProjectOverviewActionCreator(this.state, this.props);
    this.props.dispatch(action);
  };
  // FIXME: does not update on backstace (lach char only)
  clearFilter = () => {
    document.querySelector('#search-box__input').value = '';
    let action = setFilterActionCreator('');
    this.props.dispatch(action);
    action = fetchProjectOverviewActionCreator(
      { filterString: '' },
      this.props
    );
    this.props.dispatch(action);
  };

  render() {
    return (
      <div id="search-box__wrapper">
        <img id="search-box__bern-colors" src={redBlack} alt="bern colors" />
        <input
          onChange={this.handleChange}
          id="search-box__input"
          type="text"
          placeholder="Filter"
        />
        <img
          onClick={this.clearFilter}
          id="search-box__x"
          src={x}
          alt="delete"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(SearchBox);
