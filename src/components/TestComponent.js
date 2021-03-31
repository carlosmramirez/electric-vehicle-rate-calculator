import React from 'react';

import { rateOne } from './../api/Calculations.js';

class TestComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {}

  }
  render(){
    return(
      <div>
          Test Component {rateOne(10,20)}
      </div>
    )
  }
}


export default TestComponent;
