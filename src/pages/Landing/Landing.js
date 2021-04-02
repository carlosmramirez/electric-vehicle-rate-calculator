import React from 'react';

import BillImpact from '../../components/BillImpact/BillImpact.js';
import PopUpModal from '../../components/PopUpModal/PopUpModal.js';

import './assets/Landing.css';

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }

  }
  render(){
    return(
      <div className="landing">
          <PopUpModal />
      </div>
    )
  }
}


export default Landing;
