import { createStore, combineReducers } from 'redux';
import reducer from "../reducers/index";

const store =  createStore(reducer)

export default store;