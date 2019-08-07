import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import 'bootstrap'
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import * as messages from '../../core/common/message.en'
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
                        err = messages.EMAIL_ADDRESS_IS_INVALID
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
                            err = messages.PHONE_NUMBER_START_NUMBER_0_AND_HAVE_10_CHARACTER
                        }
                    }else{
                        test = true
                        err = messages.PHONE_NUMBER_START_NUMBER_0_AND_HAVE_10_CHARACTER
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
                        err = messages.DOB_IS_INVALID
                    }else{
                        let d = new Date()
                        let arr = []
                        arr = event.target.value.split("/");
                        if((parseInt(arr[0])>0 && parseInt(arr[0])<=31) && (parseInt(arr[1])>0 && parseInt(arr[1])<=12) && (parseInt(arr[2])<=d.getFullYear())){
                            test = false
                        }else{
                            test = true
                            err = messages.VALUE_DAY_OR_MONTH_OR_YEAR_IS_INVALID
                        }
                    }
                }
                break
            case "Name":
                if(event.target.value.length === 0){
                    test = false
                }else if(event.target.value.length > 25){
                    test = true
                    err = messages.NAME_LIMIT_25_CHARACTER
                }
                break
            default:
                break
        }
        this.setState({
            [event.target.name]: {value: event.target.value, valid: test, error: err}
        })
    }

    validateForm = (event) => {
        let test
        let err = ''
        switch(event.target.name){
            case "Name":
                if(!event.target.value){
                    err = messages.typeInvalid("name")
                    test = true
                }else{
                    if(event.target.value.length === 0){
                        test = false
                    }else if(event.target.value.length > 25){
                        test = true
                        err = messages.NAME_LIMIT_25_CHARACTER
                    }
                }
                break
            case "Email":
                if(!event.target.value){
                    err = messages.typeInvalid("email")
                    test = true
                }else{
                    let reEmail = /^[a-zA-Z0-9]+[.]{0,1}[a-zA-Z0-9]+[@][a-z]+([.][a-z]{2,})+$/
                    let testEmail = reEmail.test(event.target.value)
                    if(event.target.value.length === 0){
                        test = false
                    }else{
                        if(testEmail){
                            test = false
                        }else{
                            test = true
                            err = messages.EMAIL_ADDRESS_IS_INVALID
                        }
                    }
                }
                break
            case "Phone":
                if(!event.target.value){
                    err = messages.typeInvalid("phone")
                    test = true
                }else {
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
                                err = messages.PHONE_NUMBER_START_NUMBER_0_AND_HAVE_10_CHARACTER
                            }
                        }else{
                            test = true
                            err = messages.PHONE_NUMBER_START_NUMBER_0_AND_HAVE_10_CHARACTER
                        }
                    }
                }
                break
            case "DOB":
                if(!event.target.value){
                    err = messages.typeInvalid("dob")
                    test = true
                }else{
                    let reBirthday = /^[0-9]{2,2}[/][0-9]{2,2}[/][0-9]{4,4}$/
                    let testBirth = reBirthday.test(event.target.value);
                    if(event.target.value.length === 0){
                        test = false
                    }else{
                        if(!testBirth){
                            test = true
                            err = messages.DOB_IS_INVALID
                        }else{
                            let d = new Date()
                            let arr = []
                            arr = event.target.value.split("/");
                            if((parseInt(arr[0])>0 && parseInt(arr[0])<=31) && (parseInt(arr[1])>0 && parseInt(arr[1])<=12) && (parseInt(arr[2])<=d.getFullYear())){
                                test = false
                            }else{
                                test = true
                                err = messages.VALUE_DAY_OR_MONTH_OR_YEAR_IS_INVALID
                            }
                        }
                    }
                }
                break
            case "Gender":
                if(!event.target.value){
                    err = messages.selectInvalid("gender")
                    test = true
                }
                break
            case "Course":
                if(!event.target.value){
                    err = messages.selectInvalid("course")
                    test = true
                }
                break
            case "University":
                if(!event.target.value){
                    err = messages.typeInvalid("university")
                    test = true
                }
                break
            case "Faculty":
                if(!event.target.value){
                    err = messages.typeInvalid("faculty")
                    test = true
                }
                break
            default:
                break
        }
        this.setState({
            [event.target.name]: {value: event.target.value, valid:test, error: err}
        })
    }

    disabledButtonAdd = () => {
        if(this.state.Name.value.length>0 && this.state.Gender.value.length>0 
            && this.state.DOB.value.length>0 && this.state.University.value.length>0 
            && this.state.Faculty.value.length>0 && this.state.Course.value.length>0 
            && this.state.Phone.value.length>0 && this.state.Email.value.length>0){
                if(!this.state.Phone.valid && !this.state.Email.valid && !this.state.DOB.valid && !this.state.Name.valid &&
                    !this.state.Gender.valid && !this.state.Course.valid && !this.state.University.valid && !this.state.Faculty.valid){
                        return true
                }
                return false
        }else{
            return false
        }
    }

    displayValid = (valid,err) => {
        if(valid){
            return(
                <div>
                <small className="small">{err}</small>
                </div>
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
                    container: "bottom-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: { duration: 2000 },
                    dismissable: { click: true }
                });
                break
            case "error":
                this.notificationDOMRef.current.addNotification({
                    title: "Notification",
                    message: message,
                    type: "danger",
                    insert: "top",
                    container: "bottom-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: { duration: 2000 },
                    dismissable: { click: true }
                });
                break
            default:
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
        if(!this.state.Phone.valid && !this.state.Email.valid && !this.state.DOB.valid && !this.state.Name.valid &&
            !this.state.Gender.valid && !this.state.Course.valid && !this.state.University.valid && !this.state.Faculty.valid){
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
                this.props.addIntern.addIntern(intern.Email, intern)
                this.resetForm()
                this.notification("success", messages.ADD_SUCCESSFUL)
            }else{
                this.notification("error", messages.EMAIL_ALREADY_EXISTS)
            }
        }
    }
    render() {
        console.log(this.disabledButtonAdd())
        return (
            <div>
                <ReactNotification ref={this.notificationDOMRef}/>
                <Typography component="div" className="typography">
                    <div className="container title">
                        <div className="header">
                        FORM ADD INTERNSHIP
                        </div>
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
                                onBlur={(event) => this.validateForm(event)} 
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
                                onBlur={(event) => this.validateForm(event)} 
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
                                onBlur={(event) => this.validateForm(event)} 
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
                                placeholder="dd/mm/yyyy"
                                className="textField"
                                margin="normal"
                                onChange={(event) => this.handleChange(event)}
                                onBlur={(event) => this.validateForm(event)} 
                            />
                            {this.displayValid(this.state.DOB.valid,this.state.DOB.error)}
                        </div>
                        <div class="inputForm">
                            <TextField
                                error={this.state.Gender.valid}
                                id="gender"
                                select
                                label="Gender"
                                className="textField"
                                value={this.state.Gender.value}
                                onChange={(event) => this.handleChange(event)}
                                onBlur={(event) => this.validateForm(event)} 
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
                            {this.displayValid(this.state.Gender.valid,this.state.Gender.error)}
                        </div>
                        <div>
                            <TextField
                                error={this.state.Course.valid}
                                id="course"
                                select
                                label="Course"
                                className="textField"
                                value={this.state.Course.value}
                                onChange={(event) => this.handleChange(event)}
                                onBlur={(event) => this.validateForm(event)}
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
                            {this.displayValid(this.state.Course.valid,this.state.Course.error)}
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
                                onBlur={(event) => this.validateForm(event)}
                            />
                            {this.displayValid(this.state.University.valid,this.state.University.error)}
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
                                onBlur={(event) => this.validateForm(event)}
                            />
                            {this.displayValid(this.state.Faculty.valid,this.state.Faculty.error)}
                        </div>
                    </div>
                    <div className="container">
                        <div className="btnAdd">
                            <button type="button" class="btn buttonView space" onClick={() => this.handleAdd()}>CANCLE</button>
                            <button type="button" disabled={this.disabledButtonAdd() ? false : true} class="btn buttonView" onClick={() => this.handleAdd()}>ADD</button>
                        </div>
                    </div>
                </Typography>
            </div>
        );
    }
}

export default AddForm;