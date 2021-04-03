import React from 'react';

import './assets/MenuOptions.css';

class MenuOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div className="menu-options-container">
        <div className="mileage">
          <div className="user-prompt">On average, how many miles per year do you drive?</div>
          <div className="input-display">
            <div className="subscript">Miles driven per year</div>
            <input 
              type="range" 
              min="0" max="100000" 
              defaultValue={0} 
              onChange={this.props.handleChange}
              step="1000" />
          </div>
          <div className="mileage-slider-value">{this.props.mileage} miles/year</div>
        </div>
      </div>
    )
  }
}


export default MenuOptions;
