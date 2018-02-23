import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App';
import FileInput from './FileInput';

export default class RouteComponent extends Component {
    render() {
      return (
        <Router>
          <div>
            <Route exact component={App} />
            <Route path='/fileinout' component={FileInput} />
          </div>
        </Router>
      );
    }
  }