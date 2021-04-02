import React from 'react';

import './assets/PopUpModal.css';

class PopUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }
  
  render() {
    return (
      <div className="popup-shadow">
        <div className="popup-container">
          <div className="title">
            <h4>Current Rate</h4>
          </div>
          <div className="menu-options">
            <h4>MENUOPTIONS</h4>
          </div>
          <div className="buttons">
            <button>Button 1</button><button>Button 2</button>
          </div>
        </div>
      </div>
    )
  }
}


export default PopUpModal;
