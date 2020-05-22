import axios from 'axios'
import { GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT, LOADING_CLIENTS } from './types'
import { returnErrors } from './errorAction'
import { configToken } from './authAction'


export const getClients = () => (dispatch, getState) => {
    dispatch(loadingClients())
    axios
        .get('http://localhost:4000/api/clients', configToken(getState))
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
        .post('http://localhost:4000/api/clients', client, configToken(getState))
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
        .delete(`http://localhost:4000/api/clients/${id}`, configToken(getState))
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