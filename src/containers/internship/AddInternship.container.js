import React, { Component } from 'react';
import AddInternshipPage from '../../components/internship/AddInternship.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GetAPI from '../../actions/intership.action'
import * as XLSX from 'xlsx';

import HttpRequest from '../../core/utils/HttpRequest';

class AddInternship extends Component {

    constructor(props){
        super(props)
        this.state = {
            files : [],
            value : []
        }
    }

    componentWillMount() {
        this.props.getAPI.getSourseList()
        this.props.getAPI.getToeicScheduleList()
    }

    resetValue = () => {
        this.setState({
            files : [],
            value : []
        })
    }

    showData = (data) => {
        var filePath = data[0].name;
        var allowedExtensions = /(\.xlsx)$/i;
        
        if(!allowedExtensions.exec(filePath)){
            this.resetValue()
            console.log('day la file anh')
            return false;
        }else{
            var value
            const scope = this
            var files = data, f = files[0];
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
            
            this.props.getAPI.addDataToApi(value)
            
            console.log('day la du lieu post len api')
            this.resetValue()
        }
    }

    render() {
        // console.log(this.props.toeicScheduleList)
        return (
            <div>
                <AddInternshipPage
                courseList={this.props.courseList}
                listIntern={this.props.listIntern}
                addIntern={this.props.getAPI}
                toeicScheduleList={this.props.toeicScheduleList}></AddInternshipPage>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        courseList: state.intership.course,
        listIntern: state.intership.interships,
        toeicScheduleList: state.intership.toeicSchedule,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { getAPI: bindActionCreators(GetAPI,dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(AddInternship)
