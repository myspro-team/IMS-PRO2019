import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import StyledTableCell from '@material-ui/core/TableCell';
import "./../../../resources/styles/stylesPage.css";
import ButtonDelete from '../../ButtonSchedule/ButtonDelete';
import ButtonEdit from '../../ButtonSchedule/ButtonEdit';
class ButtonAction extends Component {
    render() {
        return (
            <StyledTableCell align="left" >{this.props.item}
            <Grid container spacing={1}>
                  <ButtonEdit 
                    Schedule={this.props.Schedule}
                    editSchedule={this.props.editSchedule}
                  />
                  <ButtonDelete
                    Schedule={this.props.Schedule}
                    deleteSchedule={this.props.deleteSchedule}
                  />
                  </Grid>
                  {/* <Button variant="contained" color="primary" className="a"  >
                  <i className="material-icons md-18 xToeic"  >
                    edit</i>
                    Edit</Button>
                  <Button  variant="contained" color="default" className="a" >
                  <i className="material-icons md-18 xToeic" >
                   delete</i>
                    Delete</Button> */}
                  </StyledTableCell>
        );
    }
}

export default ButtonAction;