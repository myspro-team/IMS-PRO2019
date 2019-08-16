import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import 'material-design-icons/iconfont/material-icons.css';

class ToolbarTable extends Component {

    handleChange = (event) => {
        this.props.handleSearch(event.target.value)
    }

    onAddIntership() {
        this.context.router.push("/addInternship")
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
                            onChange={(event) => this.handleChange(event)} />
                        <i class="fa fa-search icon" aria-hidden="true"></i>
                    </Paper>
                    <button type="button" class="btn buttonView"
                        onClick={this.onAddIntership.bind(this)}>ADD
                    </button>
                </Toolbar>
            </div>
        );
    }
}

ToolbarTable.contextTypes = {
    router: PropTypes.object
};

export default ToolbarTable;