import React from 'react';

import './assets/RateDisplay.css';

class RateDisplay extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="rate-container">
        <h2>{this.props.title}</h2>
        <div className="subscript">
            {this.props.isCurrentRate ? "(current rate)" : "(alternate rate)" }
        </div>
        <h4>Bill Impact of Owning an EV</h4>
        <p>${this.props.billImpact}/year</p>

        <h4>Electric Bill Before EV</h4> 
        <p>${this.props.beforeEv}/year</p>

        <h4>Electric Bill After EV</h4>
        <p>${this.props.afterEv}/year</p>
      </div>
    )
  }
}


export default RateDisplay;
