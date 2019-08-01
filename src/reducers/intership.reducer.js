import _ from 'lodash';
import * as types from '../core/common/action.types';

const defaultState = {
    interships: [],
    course: [],
    newIntern: {},
    oldIntern: {}
};


const IntershipReducer = function (state = defaultState, action) {
    switch (action.type) {
        case types.GET_INTERSHIP_LIST: {
            return _.assign({}, state, { interships: action.internship });
            //return {...state, interships:action.internship }
        }
        case types.GET_COURSE_LIST: {
            return _.assign({}, state, { course: action.course });
        }
        case types.CREATE_NEW_INTERN: {
            return _.assign({}, state, { newIntern: action.newIntern });
        }
        case types.UPDATE_INTERN: {
            return state;
        }
        case types.DELETE_INTERN: {
            return _.assign({}, state, { oldIntern: action.oldIntern     });
        }
        default: {
            return state;
        }
    }
};

export default IntershipReducer;