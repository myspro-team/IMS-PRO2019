import React, { Component } from 'react';
import InternshipTable from '../../components/internship/Internship.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GetAPI from '../../actions/intership.action'
class InternshipPage extends Component {
    componentWillMount() {
        this.props.getAPI.getInternList() 
    }
    render() {
        console.log(this.props.listIntern)
        return (
            <div>
                <InternshipTable
                listIntern={this.props.listIntern}
                loading={this.props.load}></InternshipTable>
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
