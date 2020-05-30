import axios from 'axios'
import { GET_USERS, ADD_USER, DELETE_USER, LOADING_USERS } from './types'
import { returnErrors } from './errorAction'
import { configToken } from './authAction'

const LOCAL_URL = "http://localhost:4000/api/users"

export const getUsers = () => (dispatch, getState) => {
    dispatch(loadingUsers())
    axios
        .get(LOCAL_URL, configToken(getState))
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        })
        .catch(err => returnErrors(err.response.data, err.response.status))
}

export const addUser = user => (dispatch, getState) => {
    axios
        .post(LOCAL_URL, user, configToken(getState))
        .then(res => {
            dispatch({
                type: ADD_USER,
                payload: res.data.user
            })
        })
        .catch(err => returnErrors(err.response.data, err.response.status))
}

export const deleteUser = id => (dispatch, getState) => {
    axios
        .delete(`${LOCAL_URL}/${id}`, configToken(getState))
        .then(res => {
            dispatch({
                type: DELETE_USER,
                payload: id
            })
        })
        .catch(err => returnErrors(err.response.data, err.response.status))
}

export const loadingUsers = () => {
    return {
        type: LOADING_USERS
    }
}

export const searchUsers = (data) => (dispatch, getState) => {
    dispatch(loadingUsers())
    axios
        .get(LOCAL_URL + '/' + data, configToken(getState))
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        })
        .catch(err => returnErrors(err.response.data, err.response.status))
}