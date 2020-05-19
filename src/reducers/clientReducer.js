import { GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT, LOADING_CLIENTS } from '../actions/types'

const initialState = {
    clients: [],
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CLIENTS:
            return {
                ...state,
                clients: action.payload,
                loading: false
            }
        case DELETE_CLIENT:
            return {
                ...state,
                clients: state.clients.filter(client => client._id !== action.payload)
            }
        case ADD_CLIENT:
            return {
                ...state,
                clients: [action.payload, ...state.clients]
            }
        case LOADING_CLIENTS:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}