import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import intership from './intership.reducer';

const appReducer = combineReducers({
    intership,
    routing: routerReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;