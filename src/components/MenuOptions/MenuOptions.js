import React from 'react';

import { RATE_A, RATE_B } from "../../util/constants.js";

import './assets/MenuOptions.css';

const currentRatePrompt = "What's your current electric rate?";
const defaultRateCopy = "The default rate is Rate A";
const flatRateCopy = "Flat rate of $0.15/kWh";
const touRateCopy = "TOU rate of $0.20/kWh between noon and 6pm, and $0.08/kWh otherwise";
const mileagePrompt = "On average, how many miles per year do you drive?";
const milesPerYearCopy = "Miles driven per year";
const milesPerYearShortCopy = "miles/year";
const chargingPrompt = "Which charging time-frame suits you best?";
const chargingTip = "Which charging time-frame suits you best?";
const touPeakCopy = "between 12pm and 6pm";
const touFlatCopy = "between 6pm and 12pm";
const best = "best";
const worst = "worst";

class MenuOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.modalNum === 1 || this.props.modalNum === 3){
      this.buttonDefault.focus();
    }
  }
  
  render() {
    return (
      <div className="menu-options-container">
        {
          this.props.modalNum === 1 &&
          <div className="current-plan">
            <div className="user-prompt">{currentRatePrompt}</div>
            <div className="subscript">{defaultRateCopy}</div>
            <div className="input-display-buttons">
              <button 
                ref={(input) => { this.buttonDefault = input; }}  
                onClick={this.props.handleRateClick}>
                <div className="rate-name">{RATE_A}</div> 
                <div>{flatRateCopy}</div>
              </button>
              <button onClick={this.props.handleRateClick}>
                <div className="rate-name">{RATE_B}</div> 
                <div>{touRateCopy}</div>
              </button>
            </div>
          </div>
        }
        {
          this.props.modalNum === 2 &&
          <div className="mileage">
            <div className="user-prompt">{mileagePrompt}</div>
            <div className="input-display-mileage">
              <div className="subscript">{milesPerYearCopy}</div>
              <input 
                type="range" 
                min="0" max="100000" 
                defaultValue={0} 
                onChange={this.props.handleChange}
                step="1000" />
            </div>
            <div 
              key={this.props.mileage} 
              className="mileage-slider-value">
                {this.props.mileage} {milesPerYearShortCopy}
            </div>
          </div>
        }
        {
          this.props.modalNum === 3 &&
          <div className="charging-hours">
            <div className="user-prompt">{chargingPrompt}</div>
            <div className="subscript">{chargingTip}</div>
            <div className="input-display-buttons">
              <button 
                onClick={this.props.handleChargingClick}>
                <div className="rate-name">{touPeakCopy}</div> 
                <div>{worst}</div>
              </button>
              <button 
                ref={(input) => { this.buttonDefault = input; }}  
                onClick={this.props.handleChargingClick}>
                <div className="rate-name">{touFlatCopy}</div> 
                <div>{best}</div>
              </button>
              <div className="visual-range">
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}


export default MenuOptions;
