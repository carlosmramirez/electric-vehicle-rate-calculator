import React from 'react';
import TestComponent from '../components/TestComponent.js';



class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {}

  }
  render(){
    return(
      <div>
          {/* <BillImpact title />
          <BillImpact title />
          <UserInput stepNumber title/> */}
          <TestComponent />
      </div>
    )
  }
}


export default Test;
