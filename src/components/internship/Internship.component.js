import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import { Route, Redirect } from 'react-router'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Pagination from './table/Pagination'
import TableHead from './table/TableHead'
import orderBy from 'lodash/orderBy'
import ToolbarTable from './table/Toolbar'
import Loading from './table/Loading'
import * as title from '../../core/common/column.js'

class InternshipTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            columns: [
                { id: 'Name', disablePadding: true, label: title.NAME },
                { id: 'Phone', disablePadding: false, label: title.PHONE },
                { id: 'Email', disablePadding: false, label: title.EMAIL },
                { id: 'Gender', disablePadding: false, label: title.GENDER },
                { id: 'DOB', disablePadding: false, label: title.DOB },
                { id: 'University', disablePadding: false, label: title.UNIVERSITY },
                { id: 'Faculty', disablePadding: false, label: title.FACULTY },
                { id: 'Course', disablePadding: false, label: title.COURSE },
            ],
            currentPage: 0,
            rowPerPage: 10,
            order: 'desc',
            orderBy: "",
            typeOrder: {
                asc: 'desc',
                desc: 'asc'
            },
            searchInfor: '',
            id: '',
        }
    }

    // classes = makeStyles()

    // Pagination
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
    // end pagination

    // Sort
    handleSort = (event, columnName) => {
        this.setState({
            orderBy: columnName,
            order: this.state.orderBy === columnName ? this.state.typeOrder[this.state.order] : 'asc'
        })
    }
    // end sort

    // Search
    handleSearch = (info) => {
        console.log(info)
        this.setState({
            searchInfor: info,
            currentPage: 0
        })
    }
    // end search

    // hadle redirect from table intern to page view
    onViewInternship (id) {
        this.context.router.push("/detail." + id)
    }
    //end handle

    // handle loading
    displayTable = () => {
        let result = []
        this.props.listIntern.map((value) => {
            // console.log(value.Name)
            if(value.Name.toLowerCase().indexOf(this.state.searchInfor.toLowerCase()) !== -1){
                result.push(value)
            }
        })
        let indexOfLast = (this.state.currentPage + 1) * this.state.rowPerPage
        let indexOfFirst = indexOfLast - this.state.rowPerPage
        let listIntern = orderBy(result,this.state.orderBy,this.state.order)
                    .slice(indexOfFirst, indexOfLast) 
        if(this.props.loading === false) {
            return (
                <Loading></Loading>
            )
        }else{
            return (
                <div>
                    <Table className="table">   
                        <TableHead
                        columns={this.state.columns}
                        handleSort={(event, columnName) => this.handleSort(event, columnName)}
                        order={this.state.order}
                        orderBy={this.state.orderBy}>
                        </TableHead>
                        <TableBody className="tableBody">
                            {
                                listIntern.map((value) => {
                                    return(
                                        <TableRow 
                                        hover
                                        onClick={(id) => this.onViewInternship(value.ID)}
                                        className="tableRow">
                                            <TableCell align="left" className="columnName">{value.Name}</TableCell>
                                            <TableCell align="left">{value.Phone}</TableCell>
                                            <TableCell align="left">{value.Email}</TableCell>
                                            <TableCell align="left">{value.Gender}</TableCell>
                                            <TableCell align="left">{value.DOB}</TableCell>
                                            <TableCell align="left">{value.University}</TableCell>
                                            <TableCell align="left">{value.Faculty}</TableCell>
                                            <TableCell align="left">{value.Course}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>  
                </div>
            )
        }
    }
    // end handle loading

    render() {
        let result = []
        this.props.listIntern.map((value) => {
            if(value.Name.toLowerCase().indexOf(this.state.searchInfor.toLowerCase()) !== -1){
                result.push(value)
            }
        })
        return (
            <div>
                <Paper className="root">
                    <ToolbarTable handleSearch={(info) => this.handleSearch(info)}/>
                    <div className="tableWrapper">
                        {this.displayTable()}
                    </div>
                    <Pagination count={result.length}
                    rowsPerPage={this.state.rowPerPage}
                    page={this.state.currentPage}
                    setCurrentPage={(page) => this.setCurrentPage(page)}
                    setRowPerPage={(row) => this.setRowPerPage(row)}></Pagination>
                </Paper>
            </div>
        );
    }
}

InternshipTable.contextTypes = {
    router: PropTypes.object
}

export default InternshipTable