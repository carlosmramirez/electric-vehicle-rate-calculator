import React from 'react';

import BillImpact from '../../components/BillImpact/BillImpact.js';
import PopUpModal from '../../components/PopUpModal/PopUpModal.js';

import './assets/Landing.css';

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalNum: 1,
      isActiveModal: true
    }

    this.handleForward = this.handleForward.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }
  
  handleForward() {
    console.log(this.state.modalNum)
    this.setState({ modalNum: this.state.modalNum + 1 })
  }

  handleBack() {
    this.setState({ modalNum: this.state.modalNum - 1 })
  }

  handleFinish() {
    this.setState({ modalNum: 0 })
  }

  render(){
    return(
      <div className="landing">
        { 
          this.state.modalNum === 1 &&
          <PopUpModal 
          title={"Current Plan"}
          handleForward={this.handleForward} 
          handleFinish={this.handleFinish}
          isFirstModal={true} />
        }
          
        { 
          this.state.modalNum === 2 &&
          <PopUpModal 
          title={"Mileage"}
          handleForward={this.handleForward} 
          handleBack={this.handleBack}
          handleFinish={this.handleFinish} />
        }

        { 
          this.state.modalNum === 3 &&
          <PopUpModal 
          title={"Charging Hours"}
          handleForward={this.handleForward} 
          handleBack={this.handleBack}
          handleFinish={this.handleFinish}
          isLastModal={true} />
        }

        {
          !this.state.modalNum &&
          <BillImpact />
        }


      </div>
    )
  }
}


export default Landing;
