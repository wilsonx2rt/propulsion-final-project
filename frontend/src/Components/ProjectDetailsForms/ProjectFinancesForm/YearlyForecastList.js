import React, { Component } from 'react';
import YearlyForecast from './YearlyForecast';

var rand = require("random-key");

class YearlyForecastList extends Component{

  loadForecast = (forecast) => {
    this.props.loadForecast(forecast);
  }

  render(){
    return (
      <ul>
        {
          this.props.yearly_forecasts.map(forecast => {
            return <YearlyForecast key={rand.generate(10)} forecast={ forecast } loadForecast={ this.loadForecast }/>
          })
        }
      </ul>
    )
  }
}

export default YearlyForecastList;