import { v4 as uuid } from 'uuid';
import { GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT } from '../actions/types'


const initialState = {
    items: [
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
                items: state.items.filter(item => item.id !== action.payload )
            }
        case ADD_CLIENT:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state
    }
}