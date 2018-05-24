import React, { Component } from 'react';
import { highlightTableRow, unhighlightTableRow } from '../../helpers';

var rand = require("random-key");

class ListItem extends Component{
  constructor(props){
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.loadItem(this.props.item);
  }

  // highlightTableRow = (e) => {
  //   // console.log(e.target.parentNode.childNodes);
  //   e.target.parentNode.childNodes.forEach(tdElement => {
  //     tdElement.classList.add('generic-feature-list__table__td--highlighted');
  //   })
  // }

  // unhighlightTableRow = (e) => {
  //   e.target.parentNode.childNodes.forEach(tdElement => {
  //     tdElement.classList.remove('generic-feature-list__table__td--highlighted');
  //   })
  // }

  render(){
    return (
      <tr className='generic-feature-list__table__tr' onClick={ this.handleClick } onMouseOver={ highlightTableRow } onMouseLeave={ unhighlightTableRow }>
        {/* <a href=''> */}
          { 
            Object.keys(this.props.item).map(entry => {
              if (entry !== 'id' && entry !== 'project' && entry !== 'project_finance') {
                if (this.props.item[entry] !== undefined && this.props.item[entry] !== null && typeof this.props.item[entry] === 'string' || typeof this.props.item[entry] === 'number'){
                  return <td className='generic-feature-list__table__td' key={rand.generate(10)} onClick={ this.handleClick }> {this.props.item[entry]}</td>;
                  // return ` ${[entry]}: ${this.props.item[entry]} |`;
                }
                else {
                  return <td className='generic-feature-list__table__td' key={rand.generate(10)} onClick={ this.handleClick }>{this.props.item[entry].name} </td>;
                }
              }
            })
          }
        {/* </a> */}
      </tr>
    )
  }
}

export default ListItem;