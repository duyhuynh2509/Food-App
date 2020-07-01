import {combineReducers} from 'redux';
import foodReducer from './foodReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    foods: foodReducer,
    cart: cartReducer,
    order: orderReducer
})