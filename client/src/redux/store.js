import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductDetailReducer, getProductReducer } from './reducers/productReducer';
import { getCartReducer } from './reducers/cartReducer';

const reducer  = combineReducers({
    getProducts: getProductReducer,
    getProductDetails: getProductDetailReducer,
    getCart: getCartReducer
});

const middleware = [thunk];

const store = createStore( reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;