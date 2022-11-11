import * as actionType from '../constants/cartConstants';

export const getCartReducer = (state={cartItems: []}, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exists = state.cartItems.find(product => product.id === item.id);

            if (exists) {
                return { ...state, cartItems: [...state.cartItems]};
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }
        case actionType.REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload) };
        case actionType.CART_RESET:
            return { ...state, cartItems: [] };
        default:
            return state;
    }
};