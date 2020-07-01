import {ADD_ORDER} from '../actions/types';

const initialState = {
    order:{
        item:[],
        customer:{}
    }
}
export default function (state = initialState,action){
    switch(action.type){
        case ADD_ORDER:
            return{
                ...state,
                order:{customer:action.payload.customer, item:action.payload.cartItems}
            }
        default:
            return state
    }
}