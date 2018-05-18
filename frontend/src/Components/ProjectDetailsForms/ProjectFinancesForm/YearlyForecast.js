import React, { Component } from 'react';

class YearlyForecast extends Component{
  constructor(props){
    super(props);
    // this.VAT = this.props.forecast.VAT !== null ? this.props.forecast.VAT : '0'
    // this.forecast = this.props.forecast.forecast !== null ? this.props.forecast.forecast : '0'
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.loadForecast(this.props.forecast);
  }

  render(){
    return (
      <li onClick={ this.handleClick }><a href=''>{ `${this.props.forecast.year.name} | Prognose: ${this.props.forecast.forecast} | VAT: ${this.props.forecast.VAT}` }</a></li>
    )
  }
}

export default YearlyForecast;