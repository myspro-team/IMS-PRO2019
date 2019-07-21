import _ from 'lodash';
import * as types from '../core/common/action.types';

let defaultState = {
    interships: {}
};

let IntershipReducer = function (state = defaultState, action) {
    switch (action.type) {
        case types.GET_INTERSHIP_LIST: {
            return _.assign({}, state, { interships: action.interships });
        }
        default: {
            return state;
        }
    }
};

export default IntershipReducer;