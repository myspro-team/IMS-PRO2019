import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import StyledTableCell from '@material-ui/core/TableCell';
import "./../../../resources/styles/stylesPage.css"
class ButtonAction extends Component {
    render() {
        return (
            <StyledTableCell align="left" >{this.props.item}
                  <Button variant="contained" color="primary" className="a"  >
                  <i className="material-icons md-18 xToeic"  >
                    edit</i>
                    Edit</Button>
                  <Button  variant="contained" color="default" className="a" >
                  <i className="material-icons md-18 xToeic" >
                   delete</i>
                    Delete</Button>
                  </StyledTableCell>
        );
    }
}

export default ButtonAction;