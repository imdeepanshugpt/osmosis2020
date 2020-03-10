import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    search: searchReducer,
    login: loginReducer
});