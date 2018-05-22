import React, { Component } from 'react';
import ListItem from './ListItem';
import PaginationButtons from './PaginationButtons';

var rand = require("random-key");

class GenericProjectFeatureList extends Component{

  loadItem = (item) => {
    this.props.loadItem(item);
  }

  render(){
    console.log(this.props);
    return (
      <div className={ this.props.className }>
      <ul>
        {
          this.props.items.map(item => {
            return <ListItem key={rand.generate(10)} item={ item } loadItem={ this.loadItem }/>
          })
        }
      </ul>
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