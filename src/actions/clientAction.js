import axios from 'axios'
import { GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT, LOADING_CLIENTS } from './types'
import { returnErrors } from './errorAction'
import { configToken } from './authAction'

const LOCAL_URL = "http://localhost:4000/api/clients"

export const getClients = () => (dispatch, getState) => {
    dispatch(loadingClients())
    axios
        .get(LOCAL_URL, configToken(getState))
        .then(res => {
            dispatch({
                type: GET_CLIENTS,
                payload: res.data
            })
        })
        .catch(err => returnErrors(err.response.data, err.response.status))
}

export const addClient = client => (dispatch, getState) => {
    axios
        .post(LOCAL_URL, client, configToken(getState))
        .then(res => {
            dispatch({
                type: ADD_CLIENT,
                payload: res.data.client
            })
        })
        .catch(err => returnErrors(err.response.data, err.response.status))
}

export const deleteClient = id => (dispatch, getState) => {
    axios
        .delete(`${LOCAL_URL}/${id}`, configToken(getState))
        .then(res => {
            dispatch({
                type: DELETE_CLIENT,
                payload: id
            })
        })
        .catch(err => returnErrors(err.response.data, err.response.status))
}

export const loadingClients = () => {
    return {
        type: LOADING_CLIENTS
    }
}