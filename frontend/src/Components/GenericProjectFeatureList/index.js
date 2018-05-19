import React, { Component } from 'react';
import ListItem from './ListItem';

var rand = require("random-key");

class GenericProjectFeatureList extends Component{

  loadItem = (item) => {
    this.props.loadItem(item);
  }

  render(){
    return (
      <ul>
        {
          this.props.items.map(item => {
            return <ListItem key={rand.generate(10)} item={ item } loadItem={ this.loadItem }/>
          })
        }
      </ul>
    )
  }
}

export default GenericProjectFeatureList;