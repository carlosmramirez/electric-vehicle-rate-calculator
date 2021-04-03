import React from 'react';
import MenuOptions from '../MenuOptions/MenuOptions';

import './assets/PopUpModal.css';

const backCopy = "back";
const forwardCopy = "forward";
const finishCopy = "finish";

class PopUpModal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="popup-shadow">
        <div className="popup-container">
          <div className="title">
            <h4>{this.props.title}</h4>
          </div>
          <div className="menu-options">
            <MenuOptions 
              handleRateClick={this.props.handleRateClick}
              handleChargingClick={this.props.handleChargingClick}
              handleChange={this.props.handleChange}
              isCurrentRateA={this.props.isCurrentRateA}
              mileage={this.props.mileage}
              modalNum={this.props.modalNum} />
          </div>
          <div className="buttons">
            { 
              !this.props.isFirstModal &&
              <button 
                className="back-button"
                onClick={this.props.handleBack}>
                {backCopy}
              </button>
            }
            { 
              !this.props.isLastModal &&
              <button
                className="forward-button"
                onClick={this.props.handleForward}>
                {forwardCopy}
              </button>
            }
            { 
              this.props.isLastModal &&
              <button 
                className="forward-button"
                onClick={this.props.handleFinish}>
                {finishCopy}
              </button>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default PopUpModal;
