import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./../App.css"
import React, { Component } from 'react';
import { SERVER_NAME } from "../constant";
import Grid from '@material-ui/core/Grid';
import "./../../src/App.css"
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
    fetch(SERVER_NAME + "login",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ "UserName": this.state.username, "Password": this.state.password })//truyen data vao user de so sanh neu khop thi ....
      }
    )
      .then(response =>
        response.json()
      )// tra ve dữ liệu JSON
      .then(data => {
        if (data.ID !== undefined && data.Role === 3) {
          sessionStorage.setItem("user", JSON.stringify(data));//luu data sau khi dang nhap
          this.props.onLogin(data);
        }
        else {
          this.setState({
            showError: true
          });
        }
      });
  };
  render() {
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
                      <div className="alert alert-danger custom-top">
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


export default Login;