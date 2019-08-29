import React, { Component } from 'react';
import ToeicTable from '../../components/toeic/toeic.component';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GetAPI from "./../../actions/intership.action";
class ToeicPage extends Component {
  componentWillMount() {
    this.props.getAPI.getToeicScheduleList() 
}
  constructor(props){
    super(props);
    this.state={
      data:[
        {
          name:"Speaking",
          data:"12/3/2019",
          local:"75 Mai Xuan Thuong",
          action:""
        },
        {
          name:"Write",
          data:"12/3/2019",
          local:"DH Qui Nhon",
          action:""
        },
        {
          name:"Listening",
          data:"12/3/2019",
          local:"75 Mai Xuan Thuong",
          action:""
        },
        {
          name:"adc",
          data:"12/3/2019",
          local:"DH Qui Nhon",
          action:""
        },
        {
          name:"toiec 5",
          data:"12/3/2019",
          local:"75 Mai Xuan Thuong",
          action:""
        },
        {
          name:"toiec 6",
          data:"12/3/2019",
          local:"DH Qui Nhon",
          action:""
        },
        {
          name:"toiec 7",
          data:"12/3/2019",
          local:"75 Mai Xuan Thuong",
          action:""
        },
        {
          name:"toiec 8",
          data:"12/3/2019",
          local:"DH Qui Nhon",
          action:""
        },
        {
          name:"toiec 9",
          data:"12/3/2019",
          local:"DH Qui Nhon",
          action:""
        },
        {
          name:"toiec 10",
          data:"12/3/2019",
          local:"75 Mai Xuan Thuong",
          action:""
        },
        {
          name:"tuoihahaa",
          data:"12/3/2019",
          local:"75 Mai Xuan Thuong",
          action:""
        },
        {
          name:"hihihi",
          data:"12/3/2019",
          local:"75 Mai Xuan Thuong",
          action:""
        },
        {
          name:"working",
          data:"12/3/2019",
          local:"75 Mai Xuan Thuong",
          action:""
        },
        {
          name:"todoin",
          data:"12/3/2019",
          local:"75 Mai Xuan Thuong",
          action:""
        },
        {
          name:"hoaga",
          data:"12/3/2019",
          local:"75 Mai Xuan Thuong",
          action:""
        },
      ]
    }
  }
  render() {
    console.log(this.props.toeicSchedule);
    return (
     <div>
       <ToeicTable data={this.state.data}></ToeicTable>
     </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    toeicSchedule: state.intership.toeicSchedule
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { getAPI: bindActionCreators(GetAPI,dispatch) }
}

export default connect(mapStateToProps,mapDispatchToProps) (ToeicPage);