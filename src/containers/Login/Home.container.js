import Login from "./Login.container";
import React, { Component } from 'react';
import "./../../App.css"
import HomePageContainer from "./HomePage.container";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : JSON.parse(sessionStorage.getItem('user')),//lay data sau khi dang nhap
      name:{}
    }
    // console.log(this.state.user)
  };
  onLogin (value) {
    console.log(value)
    if (value !==null) {
      this.setState({
        user:value
      });
    }
    // localStorage.setItem('user',JSON.stringify(this.state.user));//lưu user lên local storage
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
            <HomePageContainer />
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


