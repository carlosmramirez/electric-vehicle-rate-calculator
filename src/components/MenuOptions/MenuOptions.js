import React from 'react';

import './assets/MenuOptions.css';

class MenuOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    if (this.props.modalNum === 1){
      this.buttonDefault.focus();
    }
    if (this.props.modalNum === 3) {
      this.buttonDefault.focus();
    }
  }
  
  render() {
    return (
      <div className="menu-options-container">
        {
          this.props.modalNum === 1 &&
          <div className="current-plan">
            <div className="user-prompt">What's your current electric rate?</div>
            <div className="subscript">The default rate is Rate A</div>
            <div className="input-display-buttons">
              <button 
                ref={(input) => { this.buttonDefault = input; }}  
                onClick={this.props.handleRateClick}>
                <div className="rate-name">Rate A</div> 
                <div>Flat rate of $0.15/kWh</div>
              </button>
              <button onClick={this.props.handleRateClick}>
                <div className="rate-name">Rate B</div> 
                <div>TOU rate of $0.20/kWh between noon and 6pm, and $0.08/kWh otherwise</div>
              </button>
            </div>
          </div>
        }
        {
          this.props.modalNum === 2 &&
          <div className="mileage">
            <div className="user-prompt">On average, how many miles per year do you drive?</div>
            <div className="input-display-mileage">
              <div className="subscript">Miles driven per year</div>
              <input 
                type="range" 
                min="0" max="100000" 
                defaultValue={0} 
                onChange={this.props.handleChange}
                step="1000" />
            </div>
            <div key={this.props.mileage} className="mileage-slider-value">{this.props.mileage} miles/year</div>
          </div>
        }
        {
          this.props.modalNum === 3 &&
          <div className="charging-hours">
            <div className="user-prompt">Which charging time-frame suits you best?</div>
            <div className="subscript">Tip! Charging at night is most cost-effective.</div>
            <div className="input-display-buttons">
              <button 
                onClick={this.props.handleChargingClick}>
                <div className="rate-name">between 12pm and 6pm</div> 
                <div>worst</div>
              </button>
              <button 
                ref={(input) => { this.buttonDefault = input; }}  
                onClick={this.props.handleChargingClick}>
                <div className="rate-name">between 6pm and 12pm</div> 
                <div>best</div>
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
