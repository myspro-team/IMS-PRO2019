import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Toeic extends Component {
    render() {
        return (
            <div>
                 <Paper className="root">
                    <Toolbar>
                        <Typography id="tableTitle">
                            <span className="title">Nguyễn Hữu Tài</span>
                        </Typography>
                    </Toolbar>
                    <Table className="toeic">   
                        <TableBody className="tableBody">
                            <TableRow>
                                <TableCell align="left">
                                    <span className="titleToeic">Test Toeic batch 1</span>
                                    <span>Date:20/05/2018</span>
                                </TableCell>
                                <TableCell align="left">
                                    <div style={{ float: "right" }}><b>Total score: 550/990</b></div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">
                                    <span className="titleToeic">Test Toeic batch 2</span>
                                    <span>Date:20/05/2018</span>
                                </TableCell>
                                <TableCell align="left">
                                    <button type="button" class="btn buttonAttach"
                                    onClick={() => this.props.handleOpenModalDropFile()}>ATTACH FILE</button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>  
                </Paper>
            </div>
        );
    }
}

export default Toeic;