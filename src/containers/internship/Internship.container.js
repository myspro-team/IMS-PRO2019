import React, { Component } from 'react';
import InternshipTable from '../../components/internship/Internship.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GetAPI from '../../actions/intership.action'
import * as XLSX from 'xlsx';
import * as message from '../../core/common/message.en'
import Loading from '../../components/internship/table/Loading'

class InternshipPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: [],
            file: [],
            open: false,
            errorMessage: ''
        }
    }

    componentWillMount() {
        this.props.getAPI.getInternList() 
    }

    validateExcelFile = (status) => {
        if(status === 'rejected_file_type'){
            this.setState({
                errorMessage: message.PLEASE_SELECT_ONLY_FILE_EXCEL
            })
        }
        else{
            this.setState({
                errorMessage: '',
            })
        }
    }

    getFile = (file) => {
        console.log(file)
        let arr = this.state.file
        arr.push(file)
        this.setState({
            file: arr
        })
    }

    handleCloseModalDropFile = () => {
        this.setState({
            open : false,
            value : [],
            file : [],
            errorMessage : ''
        })
    }

    showModal = () => {
        this.setState({
            open : true
        })
    }

    resetValue = () => {
        this.setState({
            value : [],
            file : [],
        })
    }

    showData = () => {
        var filePath = this.state.file[0].name
        var value
        const scope = this
        var files = this.state.file, f = files[0];
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
        };
        reader.readAsArrayBuffer(f);
    }

    checkOut = (value) => {
        var index = 1
        for(var i=0; i<value.length; i++){
            if(typeof(value[i].DoB) !== 'string'){                
                index = -1
                this.showMessageDoB()
                this.resetValue()
                return
            }
            if(typeof(value[i].Name) !== 'string'){
                index = -1
                this.showMessageName()
                this.resetValue()
                return
            }
            if(typeof(value[i].Email) !== 'string'){
                index = -1
                this.showMessageEmail()
                this.resetValue()
                return
            }
            if(typeof(value[i].Phone) !== 'string'){
                index = -1
                this.showMessagePhone()
                this.resetValue()
                return
            }                
        }
        if(index === 1) {            
            // this.props.getAPI.uploadFiles(value)
            this.props.getAPI.addDataToApi(value)
                        
            console.log('day la du lieu post len api')
            this.resetValue()
        }
    }

    showMessageDoB = () => {
        this.setState({
            errorMessage : message.DOB
        })
    }

    showMessageName = () => {
        this.setState({
            errorMessage : message.FULL_NAME
        })
    }

    showMessageEmail = () => {
        this.setState({
            errorMessage : message.EMAIL
        })
    }

    showMessagePhone = () => {
        this.setState({
            errorMessage : message.PHONE
        })
    }

    render() {
        console.log(this.props.listIntern)
        var {value, open, errorMessage} = this.state
        if(value.length){
            this.checkOut(value)
        }
        return (
            <div>
                <InternshipTable
                listIntern={this.props.listIntern}
                loading={this.props.load}
                showData={this.showData}
                open={open}
                showModal={this.showModal}
                errorMessage={errorMessage}
                handleCloseModalDropFile={this.handleCloseModalDropFile}
                validateExcelFile={this.validateExcelFile}
                getFile={this.getFile}></InternshipTable>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        listIntern: state.intership.interships,
        load: state.intership.loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { getAPI: bindActionCreators(GetAPI,dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(InternshipPage)
