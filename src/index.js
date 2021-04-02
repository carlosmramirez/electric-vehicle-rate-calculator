import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing/Landing.js';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
      <div className="index-layout">
        <Route path="/" component={Landing}/>
      </div>
  </BrowserRouter>, document.getElementById("root"));
