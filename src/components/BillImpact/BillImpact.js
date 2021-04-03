import React from 'react';

import * as rateCalc from '../../api/Calculations.js'
import { getTimeAndLoadProfile, readFile } from '../../util/processData.js';
import csvTxt from '../../util/loadProfileData.txt';

import './assets/BillImpact.css';

class BillImpact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csvRaw: null,
      switchRates: true,
      handleBack: props.handleBack
    }
    this.getSwitchSavings = this.getSwitchSavings.bind(this);
  }
  
  componentDidMount() {
    readFile(csvTxt).then(data => this.setState({ csvRaw: data }))
  }

  getSwitchSavings(rateAAfterEv, rateBAfterEv) {
    return this.props.isCurrentRateA 
    ? rateAAfterEv - rateBAfterEv  
    : rateBAfterEv - rateAAfterEv;   
  }
 
  render() {
    const rateABeforeEv = this.state.csvRaw 
    ? rateCalc.getRateABeforeEv(getTimeAndLoadProfile(this.state.csvRaw)) : 0;
    const rateAAfterEv = this.state.csvRaw
    ? rateCalc.getRateAAfterEv(getTimeAndLoadProfile(this.state.csvRaw), this.props.mileage) : 0;
    const rateABillImpact = Math.ceil(100*rateAAfterEv)/100 - Math.ceil(100* rateABeforeEv)/100;

    const rateBBeforeEv = this.state.csvRaw
    ? rateCalc.getRateBBeforeEv(getTimeAndLoadProfile(this.state.csvRaw)) : 0;
    const rateBAfterEv = this.state.csvRaw
    ? rateCalc.getRateBAfterEv(getTimeAndLoadProfile(this.state.csvRaw), this.props.mileage, this.props.isTouPeriod) : 0;
    const rateBBillImpact = Math.ceil(100 * rateBAfterEv)/100 - Math.ceil(100 * rateBBeforeEv)/100;

    const switchSavings = this.getSwitchSavings(rateAAfterEv, rateBAfterEv);

    return (
      <>
        { 
          this.state.csvRaw &&
          <div className="bill-impact-layout">
            <div className="header-title">
              <div className="border"></div> 
              <h2>Your personalized EV rate plans:</h2>
            </div>
            <div className="change-rate-message">
              {
                switchSavings < 1 &&
                <h3>
                  WOW! Looks you already have the best rate!
                </h3>
              }
              {
                switchSavings > 0 &&
                <h3>
                  After owning an EV, you can save <span>${switchSavings.toFixed(2)} </span> 
                  per year by switching to Rate {this.props.isCurrentRateA ? 'B' : 'A'}!
                </h3>
              }
            </div>
            <div className="content-container">
              <div className="rate-container">
                <h2>Rate A </h2>
                <div className="subscript">
                   {this.props.isCurrentRateA ? "(current rate)" : "(alternate rate)" }
                </div>
                <h4>Bill Impact of Owning an EV</h4>
                <p>${rateABillImpact.toFixed(2)}/year</p>

                <h4>Electric Bill Before EV</h4> 
                <p>${(Math.ceil(100 * rateABeforeEv)/100).toFixed(2)}/year</p>

                <h4>Electric Bill After EV</h4>
                <p>${(Math.ceil(100 * rateAAfterEv)/100).toFixed(2)}/year</p>
              </div>
              <div className="rate-container">
                <h2>Rate B</h2>
                <div className="subscript">
                   {!this.props.isCurrentRateA ? "(current rate)" : "(alternate rate)" }
                </div>
                <h4>Bill Impact of Owning an EV</h4>
                <p>${rateBBillImpact.toFixed(2)}/year</p>

                <h4>Electric Bill Before EV</h4> 
                <p>${(Math.ceil(100 * rateBBeforeEv)/100).toFixed(2)}/year</p>

                <h4>Electric Bill After EV</h4>
                <p>${(Math.ceil(100 * rateBAfterEv)/100).toFixed(2)}/year</p>
              </div>
            </div>
            <button 
              className="change-input" 
              onClick={this.state.handleBack}>
                Change Input
            </button>
          </div>
        }
      </>
    )
  }
}

export default BillImpact;
