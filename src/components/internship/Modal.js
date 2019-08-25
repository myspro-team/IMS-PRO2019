import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import * as XLSX from 'xlsx';
import axios from 'axios'

class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            open : false,
            files : [],
            value : []
        }
    }

    handleChangeStatus = ({ meta, file }, status) => {
        if(status === 'done'){
            let arr = this.state.files
            arr.push(file)
            this.setState({
                files: arr
            })
        }
    }
    
    disabledButton = () => {
        if(this.state.files.length > 0){
            return true
        }else {
            return  false
        }
    }

    Preview = ({ meta, fileWithMeta }) => {
        const { name, size, previewUrl } = meta
        let src = previewUrl
        if(previewUrl === undefined){
            src = 'https://img-16.ccm2.net/cJWsKe0SX47XzGL5nJQrYssqjYM=/2000x/20dc4a90563849048d5221a18e04745b/ccm-faq/2000px-Microsoft_Excel_2013_logo.svg.png'
        }
        return (
            <div className="preview">
                <div className="image">
                    <img src={src}></img>
                </div>
                <div className="content">
                    <p><font color="black">{name}</font>, {size + "bytes"}</p>
                </div>
                <div className="iconCancle dzu-previewButton">
                    <i class="fa fa-trash" aria-hidden="true" onClick={() => fileWithMeta.remove()}></i>
                </div>
            </div>
        )
    }

    resetValue = () => {
        this.setState({
            files : [],
            value : []
        })
    }

    closePopup = () => {
        this.resetValue()
        this.props.handleClose(!this.props.open)
    }

    showData = () => {
        var filePath = this.state.files[0].name;
        var allowedExtensions = /(\.xlsx)$/i;
        
        if(!allowedExtensions.exec(filePath)){
            this.setState({
                files : []
            })
            return false;
        }else{
            var value
            const scope = this
            var files = this.state.files, f = files[0];
            var reader = new FileReader();
            reader.onload = function(event) {
                var data = new Uint8Array(event.target.result);
                var workbook = XLSX.read(data, {type: 'array'});
                var first_sheet_name = workbook.SheetNames[0];
                var worksheet = workbook.Sheets[first_sheet_name];
                value = XLSX.utils.sheet_to_json(worksheet) 
                scope.setState({
                    files : [],
                    value : value
                })
                console.log(value)
            };
            reader.readAsArrayBuffer(f);
        }
    }

    checkOut = (value) => {
        var index = 1
        for(var i=0; i<value.length; i++){
            if(typeof(value[i].ID) !== 'number'){
                alert('Bạn chưa nhập đầy đủ dữ liệu cột ID !')
                index = -1
                this.resetValue()
                return
            }
            if(typeof(value[i]['Full Name']) !== 'string'){
                alert('Bạn chưa nhập đầy đủ dữ liệu cột Full Name !')
                index = -1
                this.resetValue()
                return
            }
            if(typeof(value[i]['TMA Account']) !== 'string'){
                alert('Bạn chưa nhập đầy đủ dữ liệu cột TMA Account !')
                index = -1
                this.resetValue()
                return
            }
            if(typeof(value[i].Phone) !== 'string'){
                alert('Bạn chưa nhập đầy đủ dữ liệu cột Phone !')
                index = -1
                this.resetValue()
                return
            }                
        }
        if(index === 1) {
            this.postToApi(value)
            this.resetValue()
        }
    }

    postToApi = (value) => {
        for( var i=0; i<value.length; i++) {
            axios({
                method: 'post',
                url: 'http://5ce163b38ad3c700145b7bf7.mockapi.io/api/interns',
                data: {
                    Full_Name: value[i]['Full Name'],
                    TMA_Account: value[i]['TMA Account'],
                    Password: value[i].Password,
                    Phone: value[i].Phone,
                    Student_ID: value[i]['Student ID'],
                    Student_ID_1: value[i]['Student ID_1']
                }
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    render() {        
        var { value } = this.state;
        
        if(value.length){
            this.checkOut(value)
        }

        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={(value) => this.props.handleClose(!this.props.open)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{<font face="Arial" color="#3a3a3a">ATTACH FILE</font>}</DialogTitle>
                    <DialogContent className="dropzone">
                        <DialogContentText id="alert-dialog-description">
                            <Dropzone
                                PreviewComponent={this.Preview}
                                onChangeStatus={this.handleChangeStatus}
                                accept={this.props.accept}
                                maxFiles={this.props.maxFiles}
                                maxSizeBytes={this.props.maxSize}
                                inputWithFilesContent={files => (this.props.maxFiles ? `${files.length}/${this.props.maxFiles}` : 'Add file')}
                                inputContent={(files, extra) => (extra.reject ? 'File invalid' : 'Drag files or click to browse')}
                                styles={{ dropzone: { minHeight: 300, maxHeight: 300 }, 
                                inputLabel: (files, extra) => (extra.reject ? { color: 'red'} : {}),
                                dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' }, }}
                            />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <button type="button" class="btn buttonView btnColor" onClick={ this.closePopup }>CLOSE</button>
                        <button type="button" 
                        class="btn buttonView" onClick={ this.showData }
                        disabled={this.disabledButton() ? false : true}>ATTACH</button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Modal;
