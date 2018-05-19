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
              if (entry !== 'id' && entry !== 'project') {
                if (typeof this.props.item[entry] === 'object'){
                  return ` ${[entry]}: ${this.props.item[entry].name} |`;
                }
                else {
                  return ` ${[entry]}: ${this.props.item[entry]} |`;
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