import Login from './Login';
import React, { Component } from 'react';
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
    localStorage.setItem('user',JSON.stringify(this.state.user));//lưu user lên local storage
  }
  onLogout(){
    this.setState({
      user : null
    });
    sessionStorage.clear();
  }
  handleComponent () {
    if (this.state.user === null) {
      return (
      <div className="flexible-content">
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
    // console.log(this.state.user)
    let Component=this.handleComponent();
    return (
      <div >
        {Component}
      </div>
    );
  }
}

export default HomePage;


