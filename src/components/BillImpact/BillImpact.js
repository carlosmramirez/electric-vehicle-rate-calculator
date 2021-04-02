import React from 'react';

import * as rateCalc from '../../api/Calculations.js'
import { getTimeAndLoadProfile, readFile } from '../../util/processData.js';
import csvTxt from '../../util/loadProfileData.txt';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csvRaw: null
    }
  }
  
  componentDidMount() {
    readFile(csvTxt).then(data => this.setState({ csvRaw: data }))
  }

  render() {
    return (
      <div>
        {this.state.csvRaw &&
          <div>
            Rate A <br></br>
            B1 ${Math.ceil(100 * rateCalc.getRateABeforeEv(getTimeAndLoadProfile(this.state.csvRaw)))/100}/year <br></br>
            B2 ${rateCalc.getRateAAfterEv(getTimeAndLoadProfile(this.state.csvRaw), 100000)}/year <br></br>
            B2 - B1 ${rateCalc.getRateAAfterEv(getTimeAndLoadProfile(this.state.csvRaw), 100000) - rateCalc.getRateABeforeEv(getTimeAndLoadProfile(this.state.csvRaw))}/year
            <br></br>
            Rate B <br></br>
            B1 ${rateCalc.getRateBBeforeEv(getTimeAndLoadProfile(this.state.csvRaw))}/year <br></br>
            B2 ${rateCalc.getRateBAfterEv(getTimeAndLoadProfile(this.state.csvRaw), 100000, false)}/year <br></br>
            B2 - B1 ${rateCalc.getRateBAfterEv(getTimeAndLoadProfile(this.state.csvRaw), 100000, false) - rateCalc.getRateBBeforeEv(getTimeAndLoadProfile(this.state.csvRaw))}/year
          </div>
        }
      </div>
    )
  }
}


export default TestComponent;
