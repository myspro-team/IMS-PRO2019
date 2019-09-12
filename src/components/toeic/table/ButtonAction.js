import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import StyledTableCell from '@material-ui/core/TableCell';
import "./../styles.css"
class ButtonAction extends Component {
    render() {
        return (
            <StyledTableCell align="center" >
                  <Button variant="contained" color="primary" className="a"  >
                  <i className="material-icons md-18 x"  >
                    edit</i>
                    Edit</Button>
                  <Button  variant="contained" color="default" className="a" >
                  <i className="material-icons md-18 x" >
                   delete</i>
                    Delete</Button>
                  </StyledTableCell>
        );
    }
}

export default ButtonAction;