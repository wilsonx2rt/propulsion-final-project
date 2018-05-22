import React, { Component } from 'react';

class ListItem extends Component{
  constructor(props){
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.loadItem(this.props.item);
  }

  render(){
    return (
      <li onClick={ this.handleClick }>
        <a href=''>
          { 
            Object.keys(this.props.item).map(entry => {
              if (entry !== 'id' && entry !== 'project' && entry !== 'project_finance') {
                if (this.props.item[entry] !== undefined && this.props.item[entry] !== null && typeof this.props.item[entry] === 'string' || typeof this.props.item[entry] === 'number'){
                  return ` ${[entry]}: ${this.props.item[entry]} |`;
                }
                else {
                  return ` ${[entry]}: ${this.props.item[entry].name} |`;
                }
              }
            })
          }
        </a>
      </li>
    )
  }
}

export default ListItem;