import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePageContainer from './containers/HomePage.container';
import InternshipPage from './containers/internship/Internship.container'
import AddInternship from './containers/internship/AddInternship.container'
import ViewInternship from './containers/internship/ViewInternship.container'

export default (
  <Route>
    <Route path='/' component={HomePageContainer}>
      <Route path='/internship' component={InternshipPage} />
      <Route path='/addInternship' component={AddInternship} />
      <Route path='/detail.:id' component={ViewInternship} />
    </Route>

  </Route>

);
