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
          <TestComponent />
      </div>
    )
  }
}


export default Test;
