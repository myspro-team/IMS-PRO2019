import React from 'react';
import { Route } from 'react-router';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./containers/Login/Home.container";
import InternshipPage from './containers/internship/Internship.container'
import AddInternship from './containers/internship/AddInternship.container'
import ViewInternship from './containers/internship/ViewInternship.container'

export default (
  <Route>
    <Route path='/' component={Home}>
      <Route path='/internship' component={InternshipPage} />
      <Route path='/addInternship' component={AddInternship} />
      <Route path='/detail.:id' component={ViewInternship} />
    </Route>

  </Route>

);
