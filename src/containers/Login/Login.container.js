import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./../../../src/Style.css"
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as GetAPI from "./../../actions/intership.action";
// import "./../../src/App.css"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showError: false
    };
  }
 
  userName(a) {
    this.setState({ username: a.target.value })
    console.log(this.state.username)
  }
  password(a) {
    this.setState({ password: a.target.value })
    console.log(this.state.password)
  }
  handleclick(event) {
    event.preventDefault();
    console.log(this.props.getAPI);
    this.props.getAPI.getLoginList({ "UserName": this.state.username, "Password": this.state.password })
    var { data } = this.props;
    console.log(data);
    if (data.ID !== undefined && data.Role === 3) {
      sessionStorage.setItem("user", JSON.stringify(data));//luu data sau khi dang nhap
      this.props.onLogin(data);
      console.log(data)
      localStorage.setItem('user',JSON.stringify(data)); // lưu user lên localstorage
    }
    else {
      this.setState({
        showError: true
      });
    }
  };
  render() {
    // var {data}=this.props;
    // console.log(data);
    return (
      <div className="root">
        <Grid item xs>
          <div className="table">
            <Grid item xs>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="paper" >
                  <Avatar style={{ color: "#eceff1", backgroundColor: "#ff1744" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Login
                </Typography>
                  <form className="form" noValidate>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      label="Email Address"
                      autoComplete="email"
                      onChange={this.userName.bind(this)}
                    />
                    <div className="top">
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={this.password.bind(this)}
                      />
                    </div>
                    {this.state.showError ?
                      <div className="alert alert-danger custom-top text">
                        "userName or password is not correct!"
              </div> : null
                    }
                    <div className="submit">
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleclick.bind(this)}
                      >
                        Login
                  </Button>
                    </div>
                  </form>
                </div>
              </Container>
            </Grid>
          </div>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.intership.course
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(GetAPI, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);