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
import Pagination from './table/Pagination';
class ToeicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            currentPage: 0,
            rowPerPage: 50,
        }
    }
    setCurrentPage = (page) => {
        this.setState({
            currentPage: page
        })
    }

    setRowPerPage = (row) => {
        this.setState({
            rowPerPage: row
        })
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
        let indexOfLast = (this.state.currentPage + 1) * this.state.rowPerPage
        let indexOfFirst = indexOfLast - this.state.rowPerPage
        let ListToeic = data.slice(indexOfFirst,indexOfLast);
        return (
            <div className="x">
                <Paper className="root">
                    <ToolbarTable  Search={(info) => this.handleSearch(info)} />
                    <div className="tableWrapper height">
                       <Table className="table">
                       <TableHeader />
                        <TableBody >
                            {
                                ListToeic.map((value, index) => {
                                    return (
                                        <TableRow  key={index} className="tableRow ">
                                            <StyledTableCell align="left" >
                                                {value.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{value.data} </StyledTableCell>
                                            <StyledTableCell align="left">{value.local} </StyledTableCell>
                                            <ButtonAction />
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                       </Table>
                    </div>
                    <Pagination count={data.length}
                    rowsPerPage={this.state.rowPerPage}
                    page={this.state.currentPage}
                    setCurrentPage={(page) => this.setCurrentPage(page)}
                    setRowPerPage={(row) => this.setRowPerPage(row)}
                     />                       
                </Paper>
            </div>
        );
    }
}

export default ToeicTable;