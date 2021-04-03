import React from 'react';
import MenuOptions from '../MenuOptions/MenuOptions';

import './assets/PopUpModal.css';

class PopUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      handleBack: props.handleBack,
      handleForward: props.handleForward,
      handleFinish: props.handleFinish,
      isFirstModal: props.isFirstModal,
      isLastModal: props.isLastModal,
      mileage: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ mileage: event.target.value });
  }
  
  render() {
    return (
      <div className="popup-shadow">
        <div className="popup-container">
          <div className="title">
            <h4>{this.state.title}</h4>
          </div>
          <div className="menu-options">
            <MenuOptions 
              handleChange={this.handleChange} 
              mileage={this.state.mileage} />
          </div>
          <div className="buttons">
            { 
              !this.state.isFirstModal &&
              <button onClick={this.state.handleBack}>
                Back
              </button>
            }

            { 
              !this.state.isLastModal &&
              <button onClick={this.state.handleForward}>
                Forward
              </button>
            }

            { 
              this.state.isLastModal &&
              <button onClick={this.state.handleFinish}>
                Finish
              </button>
            }

          </div>
        </div>
      </div>
    )
  }
}


export default PopUpModal;
