import React, { Component } from 'react';
import ListItem from './ListItem';
import PaginationButtons from './PaginationButtons';

var rand = require("random-key");

class GenericProjectFeatureList extends Component{

  loadItem = (item) => {
    this.props.loadItem(item);
  }

  render(){
    return (
      <div className={ this.props.items.length>0 ? 'generic-feature-list__table-container' : 'hidden-element'}>
      <table className='generic-feature-list__table'>
        <thead>
          <tr>
            {
              this.props.payload ? Object.keys(this.props.payload).map(entry => {
                if (entry !== 'id' && entry !== 'project' && entry !== 'project_finance' && entry !== 'form_settings'){
                  return <th className='generic-feature-list__table__th' key={rand.generate(10)}>{ this.props.payload && this.props.payload[entry] ? this.props.payload[entry].placeholder : '' }</th>
                }
                return null;
              }) : null
            }
          </tr>
        </thead>
        <tbody>
        {
          this.props.items.map(item => {
            return <ListItem key={rand.generate(10)} item={ item } loadItem={ this.loadItem } payload={ this.props.payload }/>
          })
        }
        </tbody>
      </table>
      <PaginationButtons 
        next={ this.props.next }
        previous={ this.props.previous }
        action={ this.props.action }
        parentProps={ this.props.parentProps }
      />
    </div>
    )
  }
}

export default GenericProjectFeatureList;