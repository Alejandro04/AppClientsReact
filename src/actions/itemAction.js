import { GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT } from './types'

export const getClients = () => {
    return {
        type: GET_CLIENTS
    }
}

export const deleteClient = id => {
    return {
        type: DELETE_CLIENT,
        payload: id
    }
}

export const addClient = client => {
    return {
        type: ADD_CLIENT,
        payload: client
    }
}