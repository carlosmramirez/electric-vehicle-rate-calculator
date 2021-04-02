import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing.js';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
      <div>
        <Route path="/" component={Landing}/>
      </div>
  </BrowserRouter>, document.getElementById("root"));
