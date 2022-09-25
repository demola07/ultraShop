import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = {
	productList: productListReducer,
	productDetail: productDetailsReducer,
	cart: cartReducer,
}

const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: []

const initialState = {
	cart: { cartItems: cartItemsFromStorage },
}
const middleware = [thunk]

const store = configureStore({
	reducer,
	preloadedState: initialState,
	middleware,
})

export default store
