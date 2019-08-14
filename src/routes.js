import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './containers/HomePage';

export default (
  <Router>
    <Route path='/' component={HomePage} />
  </Router>

);
