import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import StyledTableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'material-design-icons/iconfont/material-icons.css';
import React, { Component } from 'react';
import 'material-design-icons/iconfont/material-icons.css';
import _ from "lodash";
import "./styles.css";
import ToolbarTable from './toolbar';
import TableHeader from './table/TableHead';
import ButtonAction from './table/ButtonAction';
class ToeicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
    }
    handleSearch = (info) => {
        console.log(info);
        this.setState({
            search: info
        })
    }
    render() {
        const result = this.props.data;
        var search = this.state.search;
        var data = _.filter(result, (item) => {
            return _.includes(item.name.toLowerCase(), search);
        })
        return (
            <div className="x">
                <Paper className="root">
                    <ToolbarTable  Search={(info) => this.handleSearch(info)} />
                    <div className="tableWrapper">
                       <Table className="table">
                       <TableHeader />
                        <TableBody >
                            {
                                data.map((value, index) => {
                                    return (
                                        <TableRow  key={index} className="tableRow ">
                                            <StyledTableCell component="th" scope="row">
                                                {value.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{value.data} </StyledTableCell>
                                            <StyledTableCell align="center">{value.local} </StyledTableCell>
                                            <ButtonAction />
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                       </Table>
                    </div>                       
                </Paper>
            </div>
        );
    }
}

export default ToeicTable;