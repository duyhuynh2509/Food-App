import {FETCH_PRODUCTS} from './types';
import { getProducts, getFoods } from '../../Data';

export const fetchProduct = () => dispatch => {
    const foods = getFoods();
    dispatch ({
        type: FETCH_PRODUCTS,
        payload: foods
    })
} 