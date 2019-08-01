import React, { Component } from 'react';
import InternshipTable from '../../components/Internship.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GetAPI from '../../actions/intership.action'
class InternshipPage extends Component {
    componentWillMount() {
        this.props.getAPI.getInternList() 
    }
    render() {
        return (
            <div>
                <InternshipTable
                listIntern={this.props.listIntern}></InternshipTable>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        listIntern: state.intership.interships
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { getAPI: bindActionCreators(GetAPI,dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(InternshipPage)
