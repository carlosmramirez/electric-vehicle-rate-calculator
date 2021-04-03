import React from 'react';

import * as rateCalc from '../../api/Calculations.js'
import { getTimeAndLoadProfile, readFile } from '../../util/processData.js';
import csvTxt from '../../util/loadProfileData.txt';

import RateDisplay from '../RateDisplay/RateDisplay.js';
import { roundCurrency } from '../../util/currency.js';

import './assets/BillImpact.css';
import { RATE_A, RATE_B } from '../../util/constants.js';

const changeInputCopy = "Change Input";
const bestRateCopy = "WOW! Looks you already have the best rate!";
const billImpactHeaderCopy = "Your personalized EV rate plans:";

class BillImpact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csvRaw: null,
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
    const rateABillImpact = roundCurrency(rateAAfterEv) - roundCurrency(rateABeforeEv);

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
              <h2>{billImpactHeaderCopy}</h2>
            </div>
            <div className="change-rate-message">
              {
                switchSavings < 1 &&
                <h3>{bestRateCopy}</h3>
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
              <RateDisplay
                title={RATE_A}
                billImpact={rateABillImpact.toFixed(2)}
                isCurrentRate={this.props.isCurrentRateA}
                beforeEv={roundCurrency(rateABeforeEv)}
                afterEv={roundCurrency(rateAAfterEv)} />
              <RateDisplay
                title={RATE_B}
                billImpact={rateBBillImpact.toFixed(2)}
                isCurrentRate={!this.props.isCurrentRateA}
                beforeEv={roundCurrency(rateBBeforeEv)}
                afterEv={roundCurrency(rateBAfterEv)} />
            </div>
            <button 
              className="change-input" 
              onClick={this.props.handleBack}>
                {changeInputCopy}
            </button>
          </div>
        }
      </>
    )
  }
}

export default BillImpact;
