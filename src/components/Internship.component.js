import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import Pagination from './table/Pagination'
import TableHead from './table/TableHead'
import orderBy from 'lodash/orderBy'
import ToolbarTable from './table/Toolbar'
import * as title from '../core/common/column.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getInternList from '../actions/intership.action'
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
            rows: [
                {
                    Name: "Nguyễn Hữu Tài",
                    Phone: "0948258364",
                    Email: "nhtai124352@gmail.com",
                    Gender: true ? "Male" : "Female",
                    DOB: "19/07/1998",
                    University: "Quy Nhơn",
                    Faculty: "AT",
                    Course: "React JS"
                },
                {
                    Name: "Vguyễn Hữu Văn",
                    Phone: "0948258364",
                    Email: "nhtai124352@gmail.com",
                    Gender: true ? "Male" : "Female",
                    DOB: "19/07/1998",
                    University: "Quy Nhơn",
                    Faculty: "GT",
                    Course: "React JS"
                },
                {
                    Name: "Aguyễn Hữu Truyền",
                    Phone: "0948258364",
                    Email: "nhtai124352@gmail.com",
                    Gender: true ? "Male" : "Female",
                    DOB: "19/07/1998",
                    University: "Quy Nhơn",
                    Faculty: "JT",
                    Course: "React JS"
                },
                {
                    Name: "Dguyễn Hữu Đạt",
                    Phone: "0948258364",
                    Email: "nhtai124352@gmail.com",
                    Gender: true ? "Male" : "Female",
                    DOB: "19/07/1998",
                    University: "Quy Nhơn",
                    Faculty: "IT",
                    Course: "React JS"
                },
                {
                    Name: "Gguyễn Hữu Long",
                    Phone: "0948258364",
                    Email: "nhtai124352@gmail.com",
                    Gender: true ? "Male" : "Female",
                    DOB: "19/07/1998",
                    University: "Quy Nhơn",
                    Faculty: "IT",
                    Course: "React JS"
                },
                {
                    Name: "Tguyễn Hữu An",
                    Phone: "0948258364",
                    Email: "nhtai124352@gmail.com",
                    Gender: true ? "Male" : "Female",
                    DOB: "19/07/1998",
                    University: "Quy Nhơn",
                    Faculty: "IT",
                    Course: "React JS"
                },
                {
                    Name: "Nguyễn Hữu Duy",
                    Phone: "0948258364",
                    Email: "nhtai124352@gmail.com",
                    Gender: true ? "Male" : "Female",
                    DOB: "19/07/1998",
                    University: "Quy Nhơn",
                    Faculty: "IT",
                    Course: "React JS"
                },
                {
                    Name: "Nguyễn Hữu Bảo",
                    Phone: "0948258364",
                    Email: "nhtai124352@gmail.com",
                    Gender: true ? "Male" : "Female",
                    DOB: "19/07/1998",
                    University: "Quy Nhơn",
                    Faculty: "IT",
                    Course: "React JS"
                },
                {
                    Name: "Nguyễn Hữu Giang",
                    Phone: "0948258364",
                    Email: "nhtai124352@gmail.com",
                    Gender: true ? "Male" : "Female",
                    DOB: "19/07/1998",
                    University: "Quy Nhơn",
                    Faculty: "UT",
                    Course: "React JS"
                }
            ],
            currentPage: 0,
            rowPerPage: 5,
            order: 'asc',
            orderBy: "",
            typeOrder: {
                asc: 'desc',
                desc: 'asc'
            },
            searchInfor: ''
        }
    }

    classes = makeStyles()

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
            searchInfor: info
        })
    }
    // end search

    componentWillMount() {
        this.props.getData()
        console.log(this.props.listIntern)
    }
    render() {
        let indexOfLast = (this.state.currentPage + 1) * this.state.rowPerPage
        let indexOfFirst = indexOfLast - this.state.rowPerPage
        let result = []
        this.state.rows.map((value) => {
            if(value.Name.indexOf(this.state.searchInfor) !== -1){
                result.push(value)
            }
        })
        let listIntern = orderBy(result,this.state.orderBy,this.state.order)
                    .slice(indexOfFirst, indexOfLast)
        console.log(listIntern)      
        return (
                <Paper className="root">
                    <ToolbarTable handleSearch={(info) => this.handleSearch(info)}/>
                    <div className="tableWrapper">
                        <Table className="table">
                            <TableHead
                            columns={this.state.columns}
                            handleSort={(event, columnName) => this.handleSort(event, columnName)}
                            order={this.state.order}
                            orderBy={this.state.orderBy}>
                            </TableHead>
                            <TableBody>
                                {
                                    listIntern.map((value) => {
                                        return(
                                            <TableRow>
                                                <TableCell align="center" >{value.Name}</TableCell>
                                                <TableCell align="center">{value.Phone}</TableCell>
                                                <TableCell align="center">{value.Email}</TableCell>
                                                <TableCell align="center">{value.Gender}</TableCell>
                                                <TableCell align="center">{value.DOB}</TableCell>
                                                <TableCell align="center">{value.University}</TableCell>
                                                <TableCell align="center">{value.Faculty}</TableCell>
                                                <TableCell align="center">{value.Course}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                            <TableFooter>
                                <TableRow align="right">
                                    <Pagination count={this.state.rows.length}
                                    rowsPerPage={this.state.rowPerPage}
                                    page={this.state.currentPage}
                                    setCurrentPage={(page) => this.setCurrentPage(page)}
                                    setRowPerPage={(row) => this.setRowPerPage(row)}></Pagination>
                                </TableRow>
                            </TableFooter>
                        </Table>   
                    </div>
                </Paper>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listIntern: state.interships
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { getData: bindActionCreators(getInternList,dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(InternshipTable)
