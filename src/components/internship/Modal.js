import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }
    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    
    getUploadParams = ({meta}) => {
        console.log(meta)
        return { url: 'E:\May_tai\Du_Lieu\HK6' }
    }

    handleChangeStatus = ({meta, file}, status) => {
        console.log(meta)
        console.log(file)
        console.log(status)
    }
    handleSubmit = (files, allFiles) => {
        console.log(files)
        console.log(allFiles)
        allFiles.forEach(f => f.remove())
    }
    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={() => this.handleClickOpen()}>
                    Open alert dialog
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={() => this.handleClose()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"ATTACH FILE"}</DialogTitle>
                    <DialogContent className="dropzone">
                    <DialogContentText id="alert-dialog-description">
                        <Dropzone
                        getUploadParams={this.getUploadParams}
                        onChangeStatus={this.handleChangeStatus}
                        onSubmit={this.handleSubmit}/>
                    </DialogContentText>
                        
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => this.handleClose()} color="primary">
                        Close
                    </Button>
                    <Button onClick={() => this.handleClose()} color="primary" autoFocus>
                        Attach
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Modal;
