import { combineReducers } from 'redux'
import userReducer from './UserReducer';

const rootReducer = combineReducers({ 'currentUser':userReducer });

export default rootReducer;
