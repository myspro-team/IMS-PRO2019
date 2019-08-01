import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import 'bootstrap'
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
class AddForm extends Component {
    constructor(props){
        super(props)
        this.notificationDOMRef = React.createRef();
        this.state = {
            Name: {
                value: '',
                valid: false,
                error: ''
            },
            Phone: {
                value: '',
                valid: false,
                error: ''
            },
            Email: {
                value: '',
                valid: false,
                error: ''
            },
            DOB: {
                value: '',
                valid: false,
                error: ''
            },
            Gender: {
                value: '',
                valid: false,
                error: ''
            },
            Course: {
                value: '',
                valid: false,
                error: ''
            },
            University: {
                value: '',
                valid: false,
                error: ''
            },
            Faculty: {
                value: '',
                valid: false,
                error: ''
            },
            status:true
        }
    }
    handleChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        let test = ''
        let err = ''
        switch(event.target.name){
            case "Email":
                let reEmail = /^[a-zA-Z0-9]+[.]{0,1}[a-zA-Z0-9]+[@][a-z]+([.][a-z]{2,})+$/
                let testEmail = reEmail.test(event.target.value)
                if(event.target.value.length === 0){
                    test = false
                }else{
                    if(testEmail){
                        test = false
                    }else{
                        test = true
                        err = "Email address is invalid"
                    }
                }
                break
            case "Phone":
                let rePhone = /^[0][0-9]{1,9}$/
                let testPhone = rePhone.test(event.target.value)
                if(event.target.value.length === 0){
                    test = false
                }else{
                    if(testPhone){
                        if(event.target.value.length === 10){
                            test = false
                        }else{
                            test = true
                            err = "Phone number start number 0 and have 10 character"
                        }
                    }else{
                        test = true
                        err = "Phone number start number 0 and have 10 character"
                    }
                }
                break
            case "DOB":
                let reBirthday = /^[0-9]{2,2}[/][0-9]{2,2}[/][0-9]{4,4}$/
                let testBirth = reBirthday.test(event.target.value);
                if(event.target.value.length === 0){
                    test = false
                }else{
                    if(!testBirth){
                        test = true
                        err = "DOB is invalid (dd/mm/yyyy)"
                    }else{
                        let d = new Date()
                        let arr = []
                        arr = event.target.value.split("/");
                        if((parseInt(arr[0])>0 && parseInt(arr[0])<=31) && (parseInt(arr[1])>0 && parseInt(arr[1])<=12) && (parseInt(arr[2])<=d.getFullYear())){
                            test = false
                        }else{
                            test = true
                            err = "Value day or month or year is invalid"
                        }
                    }
                }
                break
            case "Name":
                if(event.target.value.length === 0){
                    test = false
                }else if(event.target.value.length > 25){
                    test = true
                    err = "Name limit 25 character"
                }
                break
        }
        this.setState({
            [event.target.name]: {value: event.target.value, valid:test, error: err}
        })
    }
    displayValid = (valid,err) => {
        if(valid){
            return(
                <small className="small">{err}</small>
            )
        }
    }
    notification = (type, message) => {
        switch(type){
            case "success":
                this.notificationDOMRef.current.addNotification({
                    title: "Notification",
                    message: message,
                    type: "info",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: { duration: 1000 },
                    dismissable: { click: true }
                });
                break
            case "error":
                this.notificationDOMRef.current.addNotification({
                    title: "Notification",
                    message: message,
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: { duration: 1000 },
                    dismissable: { click: true }
                });
                break
        }   
    }
    resetForm = () => {
        document.getElementById("name").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("email").value = ""
        document.getElementById("dob").value = ""
        document.getElementById("university").value = ""
        document.getElementById("faculty").value = ""
        this.setState({
            Gender: { value: '', valid: false, error: ''},
            Course: { value: '', valid: false, error: ''}
        })
    }
    handleAdd = () => {
        let check = true
        if(this.state.Name.value.length>0 && this.state.Gender.value.length>0 
            && this.state.DOB.value.length>0 && this.state.University.value.length>0 
            && this.state.Faculty.value.length>0 && this.state.Course.value.length>0 
            && this.state.Phone.value.length>0 && this.state.Email.value.length>0){
            if(!this.state.Phone.valid && !this.state.Email.valid && !this.state.DOB.valid && !this.state.Name.valid){
                let arr = this.state.DOB.value.split('/')
                let d = arr[2] + "-" + arr[1] + "-" + arr[0]
                const moment = require('moment');
                let date = moment.utc(d).format();
                let intern = {
                    "Name": this.state.Name.value,
                    "PhoneNumber": this.state.Phone.value,
                    "Email": this.state.Email.value,
                    "Gender": this.state.Gender.value === "Male" ? true : false,
                    "DOB": date,
                    "University": this.state.University.value,
                    "Faculty": this.state.Faculty.value,
                    "CourseID": this.state.Course.value,
                    "IsDeleted": false
                }
                this.props.listIntern.map((value) => {
                    if(value.Email === intern.Email){
                        check = false
                    }
                })
                if(check === true){
                    this.props.addIntern(intern.Email, intern)
                    this.resetForm()
                    this.notification("success","Add complete")
                }else{
                    this.notification("error","Email already exists")
                }
            }else{
                this.notification("error","Invalid input")
            }
        }else{
            this.notification("error","Please type all input")
        }
    }
    render() {
        return (
            <div>
                <ReactNotification ref={this.notificationDOMRef}/>
                <Typography component="div" className="typography">
                    <div className="container title">
                        FORM ADD INTERNSHIP
                    </div>
                    <div className="container">
                        <div class="inputForm">     
                            <TextField
                                error={this.state.Name.valid}
                                id="name"
                                label="Name"
                                name="Name"
                                className="textField"
                                margin="normal"
                                onChange={(event) => this.handleChange(event)}
                            />
                            {this.displayValid(this.state.Name.valid,this.state.Name.error)}
                        </div>
                        <div class="inputForm">
                            <TextField
                                error={this.state.Phone.valid}
                                id="phone"
                                label="Phone"
                                name="Phone"
                                className="textField"
                                margin="normal"
                                onChange={(event) => this.handleChange(event)}
                            />
                            {this.displayValid(this.state.Phone.valid,this.state.Phone.error)}
                        </div>
                        <div className="inputForm">
                            <TextField
                                error={this.state.Email.valid}
                                id="email"
                                label="Email"
                                name="Email"
                                className="textField"
                                margin="normal"
                                onChange={(event) => this.handleChange(event)}
                            />
                            {this.displayValid(this.state.Email.valid,this.state.Email.error)}
                        </div>
                    </div>
                    <div className="container">
                        <div class="inputForm">     
                            <TextField
                                error={this.state.DOB.valid}
                                id="dob"
                                label="DOB"
                                name="DOB"
                                // type="date"
                                placeholder="dd/mm/yyyy"
                                className="textField"
                                margin="normal"
                                onChange={(event) => this.handleChange(event)}
                            />
                            {this.displayValid(this.state.DOB.valid,this.state.DOB.error)}
                        </div>
                        <div class="inputForm">
                            <TextField
                                id="gender"
                                select
                                label="Gender"
                                className="textField"
                                value={this.state.Gender.value}
                                onChange={(event) => this.handleChange(event)}
                                name="Gender"
                                SelectProps={{
                                MenuProps: {
                                    className:"menu",
                                },
                                }}
                                margin="normal"
                            >
                                <MenuItem value="Male">
                                    Male
                                </MenuItem>
                                <MenuItem value="Female">
                                   Female
                                </MenuItem>
                            </TextField>
                        </div>
                        <div>
                            <TextField
                                id="course"
                                select
                                label="Course"
                                className="textField"
                                value={this.state.Course.value}
                                onChange={(event) => this.handleChange(event)}
                                name="Course"
                                SelectProps={{
                                MenuProps: {
                                    className:"menu",
                                },
                                }}
                                margin="normal"
                            >
                                {
                                    this.props.courseList.map((value) => {
                                        return (
                                            <MenuItem value={value._id}>
                                                {value.CourseName}
                                            </MenuItem>
                                        )
                                    })
                                }
                                
                            </TextField>
                        </div>
                    </div>
                    <div className="container">
                        <div class="inputForm">     
                            <TextField
                                error={this.state.University.valid}
                                id="university"
                                label="University"
                                name="University"
                                className="textField"
                                margin="normal"
                                onChange={(event) => this.handleChange(event)}
                            />
                            {this.displayValid(this.state.University.valid,this.state.University.value)}
                        </div>
                        <div class="inputForm">
                            <TextField
                                error={this.state.Faculty.valid}
                                id="faculty"
                                label="Faculty"
                                name="Faculty"
                                className="textField"
                                margin="normal"
                                onChange={(event) => this.handleChange(event)}
                            />
                            {this.displayValid(this.state.Faculty.valid,this.state.Faculty.value)}
                        </div>
                    </div>
                    <div className="container">
                        <div className="btnAdd">
                            <button type="button" class="btn buttonView space" onClick={() => this.handleAdd()}>CANCLE</button>
                            <button type="button" class="btn buttonView" onClick={() => this.handleAdd()}>ADD</button>
                        </div>
                    </div>
                </Typography>
            </div>
        );
    }
}

export default AddForm;