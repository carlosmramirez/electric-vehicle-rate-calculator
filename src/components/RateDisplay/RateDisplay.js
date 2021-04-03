import React from 'react';

import './assets/RateDisplay.css';

const billImpactCopy = "Bill Impact of Owning an EV";
const beforeEvCopy = "Electric Bill Before EV";
const afterEvCopy = "Electric Bill After EV";
const perYearCopy = "/year";
const currentRateCopy = "(current rate)";
const altRateCopy = "(alternate rate)";

class RateDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rate-container">
        <h2>{this.props.title}</h2>
        <div className="subscript">
            {this.props.isCurrentRate ? currentRateCopy : altRateCopy} 
        </div>
        <h4>{billImpactCopy}</h4>
        <p>${this.props.billImpact}{perYearCopy}</p>

        <h4>{beforeEvCopy}</h4> 
        <p>${this.props.beforeEv}{perYearCopy}</p>

        <h4>{afterEvCopy}</h4>
        <p>${this.props.afterEv}{perYearCopy}</p>
      </div>
    )
  }
}

export default RateDisplay;