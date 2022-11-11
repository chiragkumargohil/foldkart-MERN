import axios from 'axios';

import * as actionType from '../constants/cartConstants';

const url = 'http://localhost:5000';

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/product/${id}`);

        dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
    } catch (error) {
        dispatch({ type: actionType.ADD_TO_CART_FAIL, payload: error.response });
    }
};

export const removeFromCart = (id) => async (dispatch) => {
    dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
}; // try-catch is not required as there is no api calls

export const resetCart = () => async (dispatch) => {
    dispatch({ type: actionType.CART_RESET });
};