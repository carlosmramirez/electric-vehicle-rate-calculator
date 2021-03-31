import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Test from './pages/Test.js';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
      <div>
        <Route path="/" component={Test}/>
      </div>
  </BrowserRouter>, document.getElementById("root"));
