import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePageContainer from './containers/HomePage.container';
import InternshipPage from './containers/internship/Internship.container'
export default (
  <Router>
    <Route path='/' component={HomePageContainer} />
    <Route path='/internship' component={InternshipPage} />
  </Router>

);
