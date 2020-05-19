import { GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT } from './types'

export const getClients = () =>{
    return {
        type: GET_CLIENTS
    }
}