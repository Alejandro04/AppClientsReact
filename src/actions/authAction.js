import axios from 'axios'

import {
    LOADING_USER,
    LOADED_USER,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types'
import authReducer from '../reducers/authReducer'
import { returnErrors } from './errorAction'

// Check token and loaduser
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: LOADING_USER })

    axios.get('http://localhost:4000/api/auth/user', configToken(getState))
        .then(res => dispatch({
            type: LOADED_USER,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}

// Register user
export const register = ({ name, email, password }) => dispatch => {
    // Config headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // Request 
    const body = JSON.stringify({ name, email, password })
    axios.post('http://localhost:4000/api/register', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

// Setup headers and token
export const configToken = getState => {

    // GET token from localstorage
    const token = getState().auth.token

    // Config headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token
    }

    return config
}