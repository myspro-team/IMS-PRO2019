import React, { Component } from 'react';
import AddInternshipPage from '../../components/internship/AddInternship.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GetAPI from '../../actions/intership.action'
class AddInternship extends Component {
    componentWillMount() {
        this.props.getAPI.getSourseList()
    }

    render() {
        return (
            <div>
                <AddInternshipPage
                courseList={this.props.courseList}
                listIntern={this.props.listIntern}
                addIntern={this.props.getAPI}></AddInternshipPage>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        courseList: state.intership.course,
        listIntern: state.intership.interships
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { getAPI: bindActionCreators(GetAPI,dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(AddInternship)
