import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePageContainer from './containers/HomePage.container';

export default (
  <Router>
    <Route path='/' component={HomePageContainer} />
  </Router>

);
