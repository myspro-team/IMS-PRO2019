import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import StyledTableCell from '@material-ui/core/TableCell';
import "./../styles.css";
import ButtonDelete from '../../ButtonSchedule/ButtonDelete';
import ButtonEdit from '../../ButtonSchedule/ButtonEdit';

class ButtonAction extends Component {
    render() {
        return (
            <StyledTableCell align="left" >
            <Grid container spacing={1}>
                  {/* <Button variant="contained" color="primary" className="a"  >
                  <i className="material-icons md-18 x"  >
                    edit</i>
                    Edit</Button> */}
                    <ButtonEdit 
                    Schedule={this.props.Schedule}
                    editSchedule={this.props.editSchedule}
                  />
                  {/* <Button  variant="contained" color="default" className="a" >
                  <i className="material-icons md-18 x" >
                   delete</i>
                    Delete</Button> */}
                    <ButtonDelete
                    Schedule={this.props.Schedule}
                    deleteSchedule={this.props.deleteSchedule}/>
                  </Grid>
                  </StyledTableCell>
        );
    }
}

export default ButtonAction;