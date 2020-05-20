import axios from 'axios'
import { GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT, LOADING_CLIENTS } from './types'

export const getClients = () => dispatch => {
    dispatch(loadingClients())
    axios
        .get('http://localhost:4000/api/clients')
        .then(res => {
            dispatch({
                type: GET_CLIENTS,
                payload: res.data
            })
        })
}

export const addClient = client => dispatch => {
    axios
        .post('http://localhost:4000/api/clients', client)
        .then(res => {
            dispatch({
                type: ADD_CLIENT,
                payload: res.data.client
            })
        })
}

export const deleteClient = id => dispatch => {
    axios
        .delete(`http://localhost:4000/api/clients/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_CLIENT,
                payload: id
            })
        })
}

export const loadingClients = () => {
    return {
        type: LOADING_CLIENTS
    }
}