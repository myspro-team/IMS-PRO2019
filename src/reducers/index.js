import { combineReducers } from 'redux';
import intership from './intership.reducer';

const appReducer = combineReducers({
    intership,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;