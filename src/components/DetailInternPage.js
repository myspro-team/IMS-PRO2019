import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import InternshipPage from '../containers/internship/Internship.container'
class DetailInternPage extends Component {
    constructor(props){
        super(props)
        this.notificationDOMRef = React.createRef();
        this.state = {
            Name: {
                value: '',
                valid: false,
                disabled: false
            },
            Phone: {
                value: '',
                valid: false,
                disabled: false,
                error: ''
            },
            Email: {
                value: '',
                valid: false,
                disabled: false,
                error: ''
            },
            DOB: {
                value: '',
                valid: false,
                disabled: false,
                error: ''
            },
            Gender: {
                value: '',
                valid: false,
                disabled: false,
                error: ''
            },
            Course: {
                value: '',
                valid: false,
                disabled: false,
                error: ''
            },
            University: {
                value: '',
                valid: false,
                disabled: false,
                error: ''
            },
            Faculty: {
                value: '',
                valid: false,
                disabled: false,
                error: ''
            },
            status: true,
            redirect: true
        }
    }
    
    componentWillMount(){
        this.setState({
            Name: {value: this.props.intern.Name, valid: false, disabled: false, error: ''},
            Phone: {value: this.props.intern.Phone, valid: false, disabled: false, error: ''},
            Email: {value: this.props.intern.Email, valid: false,disabled: false, error: ''},
            DOB: {value: this.props.intern.DOB, valid: false, disabled: false, error: ''},
            Gender: {value: this.props.intern.Gender, valid: false, disabled: false, error: ''},
            Course: {value: this.props.intern.CourseID, valid: false,disabled: false, error: ''},
            University: {value: this.props.intern.University, valid: false, disabled: false, error: ''},
            Faculty: {value: this.props.intern.Faculty, valid: false, disabled: false, error: ''}
        })
    }

    displayButton = () => {
        if(this.state.status){
            return (
                <div className="header1">   
                    <button type="button" class="btn buttonView" onClick={() => this.handleEdit()}>EDIT</button>   
                </div>
            )
        }else{
            return (
                <div className="header1">   
                    <button type="button" class="btn buttonView" onClick={() => this.handleSave()}>SAVE</button>
                </div>
            )
        }
    }

    handleEdit = () => {
        this.setState({
            Name: {value: this.state.Name.value, valid: false, disabled: true, error: ''},
            Phone: {value: this.state.Phone.value, valid: false, disabled: true, error: ''},
            Email: {value: this.state.Email.value, valid: false,disabled: true, error: ''},
            DOB: {value: this.state.DOB.value, valid: false, disabled: true, error: ''},
            Gender: {value: this.state.Gender.value, valid: false, disabled: true, error: ''},
            Course: {value: this.state.Course.value, valid: false,disabled: true, error: ''},
            University: {value: this.state.University.value, valid: false, disabled: true, error: ''},
            Faculty: {value: this.state.Faculty.value, valid: false, disabled: true, error: ''},
            status: !this.state.status
        })
    }

    resetForm = () => {
        this.setState({
            Name: {value: this.state.Name.value, valid: false, disabled: false, error: ''},
            Phone: {value: this.state.Phone.value, valid: false, disabled: false, error: ''},
            Email: {value: this.state.Email.value, valid: false,disabled: false, error: ''},
            DOB: {value: this.state.DOB.value, valid: false, disabled: false, error: ''},
            Gender: {value: this.state.Gender.value, valid: false, disabled: false, error: ''},
            Course: {value: this.state.Course.value, valid: false,disabled: false, error: ''},
            University: {value: this.state.University.value, valid: false, disabled: false, error: ''},
            Faculty: {value: this.state.Faculty.value, valid: false, disabled: false, error: ''},
            status: !this.state.status
        })
    }

    handleChange = (event) => {
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
            [event.target.name]: { value: event.target.value, valid: test, disabled: true, error:err}
        })
    }

    displayValid = (valid,error) => {
        if(valid){
            return(
                <small className="small">{error}</small>
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

    handleSave = () => {
        if(this.state.Name.value.length>0 && this.state.Gender.value.length>0 
            && this.state.DOB.value.length>0 && this.state.University.value.length>0 
            && this.state.Faculty.value.length>0 && this.state.Course.value.length>0 
            && this.state.Phone.value.length>0 && this.state.Email.value.length>0){
            if(!this.state.Phone.valid && !this.state.Email.valid && !this.state.DOB.valid){
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
    
                    this.props.updateIntern(intern,this.props.id)
                    this.resetForm()  
                    this.notification("success","Update complete")
            }else{
                this.notification("error","Invalid input")
            }
        }else{
            this.notification("error","Please type all input")
        }
    }

    handleDelete = () => {
        this.props.deleteIntern(this.props.id, {})
        this.notification("success","Delete complete")
        // this.setState({
        //     redirect: false
        // })
    }

    redirect = () => {
        if(!this.state.redirect){
            return (
                <div>
                    <Redirect to={{pathname: "/internship"}}/>
                    <Route path='/internship' component={InternshipPage} />
                </div>
            )
        }else{
            return (
            <div>
            <ReactNotification ref={this.notificationDOMRef}/>
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    Are you sure delete intern???
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.handleDelete()}>Delete</button>
                    </div>
                </div>
                </div>
            </div>
            <Typography component="div" className="typography">
                <div className="container title">
                    <div className="header">
                    DETAIL INTERNSHIP   
                    </div> 
                    {
                        this.displayButton()
                    }
                    <div className="header1">  
                        <button type="button" 
                        class="btn buttonView" 
                        data-toggle="modal"
                        data-target="#exampleModal">DELETE</button> 
                    </div>     
                </div>
                <div className="container">
                    <div className="inputForm">     
                        <TextField
                            error={this.state.Phone.valid}
                            defaultValue={this.props.intern.Name}
                            disabled={this.state.Name.disabled ? false : true}
                            id="name"
                            label="Name"
                            name="Name"
                            className="textField"
                            margin="normal"
                            onChange={(event) => this.handleChange(event)}
                        />
                        {this.displayValid(this.state.Name.valid,this.state.Name.error)}
                    </div>
                    <div className="inputForm">
                        <TextField
                            error={this.state.Phone.valid}
                            id="phone"
                            defaultValue={this.props.intern.Phone}
                            disabled={this.state.Phone.disabled ? false : true}
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
                            defaultValue={this.props.intern.Email}
                            disabled={this.state.Email.disabled ? false : true}
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
                    <div className="inputForm">     
                        <TextField
                            error={this.state.DOB.valid}
                            id="dob"
                            defaultValue={this.props.intern.DOB}
                            disabled={this.state.DOB.disabled ? false : true}
                            label="DOB"
                            name="DOB"
                            // type="date"
                            className="textField"
                            margin="normal"
                            onChange={(event) => this.handleChange(event)}
                        />
                        {this.displayValid(this.state.DOB.valid,this.state.DOB.error)}
                    </div>
                    <div className="inputForm">
                        <TextField
                            id="gender"
                            value={this.state.Gender.value}
                            disabled={this.state.Gender.disabled ? false : true}
                            select
                            label="Gender"
                            className="textField"
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
                            value={this.state.Course.value}
                            disabled={this.state.Course.disabled ? false : true}
                            select
                            label="Course"
                            className="textField"
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
                    <div className="inputForm">     
                        <TextField
                            id="university"
                            defaultValue={this.props.intern.University}
                            disabled={this.state.University.disabled ? false : true}
                            label="University"
                            name="University"
                            className="textField"
                            margin="normal"
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div className="inputForm">
                        <TextField
                            id="faculty"
                            defaultValue={this.props.intern.Faculty}
                            disabled={this.state.Faculty.disabled ? false : true}
                            label="Faculty"
                            name="Faculty"
                            className="textField"
                            margin="normal"
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                </div>
            </Typography>
            </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.redirect()}
            </div>
        );
    }
}

export default DetailInternPage;