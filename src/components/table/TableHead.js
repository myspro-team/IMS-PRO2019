import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import '../../resources/styles/style.css'
class TableHead extends Component {
    createSortHandler = property => event => {
        console.log(property)
        this.props.handleSort(event, property);
    };
    render() {
        return (
            <TableRow>
                {
                    this.props.columns.map((value) => {
                        return(
                        <TableCell
                        //className="columnBody"
                        key={value.id}
                        align="center"
                        //padding={value.disablePadding ? 'none' : 'default'}
                        sortDirection={this.props.orderBy === value.id ? this.props.order : false}>
                            <TableSortLabel 
                            active={this.props.orderBy === value.id}
                            direction={this.props.order}
                            onClick={this.createSortHandler(value.id)}>
                                {value.label}
                            </TableSortLabel>
                        </TableCell>
                        )
                    })
                }
            </TableRow>
        );
    }
}

export default TableHead;