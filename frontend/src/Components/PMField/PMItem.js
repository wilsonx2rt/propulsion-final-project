import React, { Component } from 'react';

class PMItem extends Component {

  constructor(props){
    super(props);

    this.state = {
      isChecked: false,
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.current_managers !== null && nextProps.current_managers !== undefined && nextProps.current_managers.length !== 0){
      const newState = Object.assign({}, prevState);
      nextProps.current_managers.map(manager => {
        if (nextProps.item && nextProps.item.id === manager.id) newState.isChecked = true;
      })
      return newState;
    }
    return null;
  }

  handleChange = (e) => {
    this.setState({isChecked: !this.state.isChecked});
    this.props.toggleCheckboxes(this.props.item);
  }

  render() {
    return (
      <div>
        <input type="checkbox" id={ `PMid-${this.props.item.id}` } name="PM" value={ this.props.item.name } onChange={ this.handleChange } checked={ this.state.isChecked}/>
        <label htmlFor={ `PMid-${this.props.item.id}` }>{ this.props.item.name }</label>
      </div>
    )
  }
}

export default PMItem;