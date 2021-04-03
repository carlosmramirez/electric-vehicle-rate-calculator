import React from 'react';

import BillImpact from '../../components/BillImpact/BillImpact.js';
import PopUpModal from '../../components/PopUpModal/PopUpModal.js';

import './assets/Landing.css';

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalNum: 1,
      isActiveModal: true,
      isCurrentRateA: true,
      isTouPeriod: false,
      mileage: 0
    }

    this.handleForward = this.handleForward.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
    this.handleRateClick = this.handleRateClick.bind(this);
    this.handleChargingClick = this.handleChargingClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleForward() {
    this.setState({ modalNum: this.state.modalNum + 1 })
  }

  handleBack() {
    this.setState({ modalNum: this.state.modalNum - 1 })
  }

  handleFinish() {
    this.setState({ modalNum: 4 })
  }
  
  handleRateClick(e) {
    if (/Flat|Rate A/.test(e.target.outerText)) {
      this.setState({ isCurrentRateA: true});
    }

    if (/TOU|Rate B/.test(e.target.outerText)) {
      this.setState({ isCurrentRateA: false});
    } 
  }

  handleChargingClick(e) {
    if (/between 12pm and 6pm|worst/.test(e.target.outerText)) {
      this.setState({ isTouPeriod: true });
    } 

    if (/between 6pm and 12pm|best/.test(e.target.outerText)) {
      this.setState({ isTouPerioud: false });
    } 
  }

  handleChange(e) {
    this.setState({ mileage: e.target.value });
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
          handleRateClick={this.handleRateClick}
          handleChargingClick={this.handleChargingClick}
          handleChange={this.handleChange}
          isCurrentRateA={this.state.isCurrentRateA}
          modalNum={this.state.modalNum}
          mileage={this.state.mileage}
          isFirstModal={true} />
        }
        { 
          this.state.modalNum === 2 &&
          <PopUpModal 
          title={"Mileage"}
          handleForward={this.handleForward} 
          handleBack={this.handleBack}
          handleRateClick={this.handleRateClick}
          handleChargingClick={this.handleChargingClick}
          handleFinish={this.handleFinish}
          handleChange={this.handleChange}
          isCurrentRateA={this.state.isCurrentRateA}
          modalNum={this.state.modalNum}
          mileage={this.state.mileage} />
        }
        { 
          this.state.modalNum === 3 &&
          <PopUpModal 
          title={"Charging Hours"}
          handleForward={this.handleForward} 
          handleBack={this.handleBack}
          handleFinish={this.handleFinish}
          handleRateClick={this.handleRateClick}
          handleChargingClick={this.handleChargingClick}
          handleChange={this.handleChange}
          isCurrentRateA={this.state.isCurrentRateA}
          modalNum={this.state.modalNum}
          mileage={this.state.mileage}
          isLastModal={true} />
        }
        {
          this.state.modalNum === 4 &&
          <BillImpact 
            handleBack={this.handleBack}
            isCurrentRateA={this.state.isCurrentRateA}
            mileage={this.state.mileage}
            isTouPeriod={this.state.isTouPeriod} />
        }
      </div>
    )
  }
}

export default Landing;
