import { combineReducers } from 'redux';
import apiReducer from "apiReducer";
import userReducer from "userReducer";
import profileReducer from "profileReducer";

export default combineReducers({
    apiReducer,
    userReducer,
    profileReducer,
})