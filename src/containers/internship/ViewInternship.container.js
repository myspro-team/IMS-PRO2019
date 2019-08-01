import React, { Component } from 'react';
import ViewInternshipPage from '../../components/ViewInternship.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GetAPI from '../../actions/intership.action'
class ViewInternship extends Component {
    constructor(props){
        super(props)
        this.state = {
            info: {}
        }
    }
    componentWillMount() {
        this.props.getAPI.getSourseList()
        this.props.listIntern.map((value) => {
            if(value.ID === this.props.match.params.id){
                this.setState({
                    info: value
                })
            }
        })
    }
    render() {
        return (
            <div>
                <ViewInternshipPage
                id={this.props.match.params.id}
                courseList={this.props.courseList}
                intern={this.state.info}
                listIntern={this.props.listIntern}
                updateIntern={(data,id) => this.props.getAPI.updateIntern(data,id)}
                deleteIntern={(id, data) => this.props.getAPI.deleteIntern(id, data)}></ViewInternshipPage>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listIntern: state.intership.interships,
        courseList: state.intership.course
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return { getAPI: bindActionCreators(GetAPI,dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewInternship)
