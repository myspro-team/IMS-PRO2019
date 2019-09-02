import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import StyledTableCell from '@material-ui/core/TableCell';
import "./../styles.css"
import TableHead from '@material-ui/core/TableHead';
class TableHeader extends Component {

    render() {
        return (
            <TableHead className="color" >
                <TableRow >
                    <StyledTableCell className="color1 columnName" > <b>Name Schedule</b> </StyledTableCell>
                    <StyledTableCell className="color1" align="center"><b>Date</b></StyledTableCell>
                    <StyledTableCell className="color1" align="center"><b>Location</b></StyledTableCell>
                    <StyledTableCell className="color1" align="center"><b>Action</b></StyledTableCell>
                </TableRow>
            </TableHead>
        );
    }
}

export default TableHeader;