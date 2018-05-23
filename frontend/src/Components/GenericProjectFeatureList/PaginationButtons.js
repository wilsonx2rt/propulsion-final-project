import React, { Component } from 'react';
import { goPrevPage, goNextPage } from '../ProjectDetailsForms/helpers';
import Button from '../Button';
import './index.css';

// Expect links to previous and next pagination pages, 

class PaginationButtons extends Component{
  render() {
    return (
      <div className='pagination-buttons-container'>
        <Button className={ this.props.previous === null ? 'hidden-element' : 'pagination-button' } type='button' handleClick={ (e) => goPrevPage(e, this.props.previous, this.props.action, this.props.parentProps) } btnText='Prev' /> 
        <Button className={ this.props.next === null ? 'hidden-element' : 'pagination-button' } type='button' handleClick={ (e) => goNextPage(e, this.props.next, this.props.action, this.props.parentProps) } btnText='Next'/>
       </div>
    )
  }
}

export default PaginationButtons;