import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Admin from "./admin"
class Routes extends Component {

    render() {
        return (
          <Switch>
              <Route path='/' exact component={Admin} />
          </Switch>  
        );
    }
}

export default Routes;