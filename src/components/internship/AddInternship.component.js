import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AddForm from './AddForm'

class AddInternshipPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0
        }
    }
    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
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
                    Page toeic
                </Typography>
            )
        }
    }
    render() {
        return (
            <div  className="appBar">
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
            </div>
        );
    }
}

export default AddInternshipPage