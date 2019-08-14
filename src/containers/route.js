import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import HomePageContainer from "./HomePage.container"
class Routes extends Component {

    render() {
        return (
          <Switch>
              <Route path='/' exact component={HomePageContainer} />
          </Switch>  
        );
    }
}

export default Routes;
