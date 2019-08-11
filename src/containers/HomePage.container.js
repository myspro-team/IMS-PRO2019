import Login from './form';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Routes from "./route"
 import "./../App.css"
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : JSON.parse(sessionStorage.getItem('user')),//lay data sau khi dang nhap
    }
  };
  onLogin (value) {
    if (value !== null) {
      this.setState({
        user : value
      }); 
    } 
  }
  onLogout(){
    this.setState({
      user : null
    });
    sessionStorage.clear();
  }
  changeComponent () {
    if (this.state.user === null) {
      return (
      <div className="flexible-content">
      <Redirect to='/'/>  
      <main id="content" className="p-5">
      <Login onLogin = {this.onLogin.bind(this)}></Login>
      </main>
      </div>
      )
    }
    else{
      return (
        <div className="flexible-content">
            <Routes></Routes>
        </div>
      )
    }
  };
  render() {
    console.log(this.state.user)
    let Component=this.changeComponent();
    return (
      <div >
        {Component}
      </div>
    );
  }
}

export default HomePage;

