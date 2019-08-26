import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AddForm from './AddForm'
import Modal from './Modal'
class AddInternshipPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0,
            open: false,
        }
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue,
        })
    }

    handleClose = (value) => {
        this.setState({
            open: value,
        })
    }

    handleOpen = () => {
        this.setState({
            open: true,
        })
    }

    displayForm = () => {
        if(this.state.value === 0){
            return (
                <AddForm
                courseList={this.props.courseList}
                addIntern={this.props.addIntern}
                listIntern={this.props.listIntern}>
                </AddForm>
            )
        }else if(this.state.value === 1){
            return (
                <Typography component="div" style={{ padding: 8 * 3 }}>
                    <div className="toeic">
                        <button type="button" class="btn buttonAttach" onClick={() => this.handleOpen()}>ATTACH FILE</button>
                    </div>
                    <Modal
                    open={this.state.open}
                    handleClose={(value) => this.handleClose(value)}
                    accept="image/*"
                    maxFiles={3}
                    ></Modal>
                </Typography>
            )
        }
    }
    render() {
        return (
            <div >
                <Paper className="root">
                <AppBar position="static" color="default">
                    <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    >
                        <Tab label="Information" className="tabChild"/>
                        <Tab label="Toeic" className="tabChild"/>
                    </Tabs>
                </AppBar>
                {this.displayForm()}
                </Paper>
            </div>
        );
    }
}

export default AddInternshipPage