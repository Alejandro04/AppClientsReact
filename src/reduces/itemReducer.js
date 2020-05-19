import { v4 as uuid } from 'uuid';
import { GET_CLIENTS, ADD_CLIENT, DELETE_ITEM } from '../actions/types'


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
        default:
            return state
    }
}