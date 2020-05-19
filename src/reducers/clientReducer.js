import { v4 as uuid } from 'uuid';
import { GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT } from '../actions/types'

const initialState = {
    clients: [
        { id: uuid(), name: 'Client 1' },
        { id: uuid(), name: 'Client 2' },
        { id: uuid(), name: 'Client 3' },
        { id: uuid(), name: 'Client 4' },
    ]
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_CLIENTS:
            return {
                ...state
            }
        case DELETE_CLIENT:
            return {
                ...state,
                clients: state.clients.filter(client => client.id !== action.payload )
            }
        case ADD_CLIENT:
            return {
                ...state,
                clients: [action.payload, ...state.clients]
            }
        default:
            return state
    }
}