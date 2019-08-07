import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import 'material-design-icons/iconfont/material-icons.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class ToolbarTable extends Component {
    handleChange = (event) => {
        this.props.handleSearch(event.target.value)
    }
    render() {
        return (
            <div>
                <Toolbar>
                    <Typography id="tableTitle">
                        <span className="title">INTERNSHIPS</span>
                    </Typography>
                    <div className="spacer" />
                    <Paper className="search">
                        <InputBase 
                        placeholder="Search internship" 
                        className="inputSearch"
                        onChange={(event) => this.handleChange(event)}/>
                        <i class="fa fa-search icon" aria-hidden="true"></i>   
                    </Paper>
                    {/* <Tooltip> */}
                        <Link to="/addInternship">
                            <button type="button" class="btn buttonView">ADD</button>
                        </Link>    
                    {/* </Tooltip> */}
                </Toolbar>
            </div>
        );
    }
}

export default ToolbarTable;