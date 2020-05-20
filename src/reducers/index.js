import {  combineReducers } from 'redux'
import clientReducer from './clientReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

export default combineReducers({
    clients: clientReducer,
    error: errorReducer,
    auth: authReducer
})