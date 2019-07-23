import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
class ToolbarTable extends Component {
    handleChange = (event) => {
        //console.log(event.target.value)
        this.props.handleSearch(event.target.value)
    }
    render() {
        return (
            <div>
                <Toolbar>
                    <Typography variant="h6" id="tableTitle">
                        Internship
                    </Typography>
                    <div className="spacer" />
                    <Paper className="search">
                        <InputBase 
                        placeholder="Search" 
                        className="inputSearch"
                        onChange={(event) => this.handleChange(event)}/>
                        <IconButton  aria-label="Search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Toolbar>
            </div>
        );
    }
}

export default ToolbarTable;