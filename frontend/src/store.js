import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducers'

const reducer = {
	productList: productListReducer,
	productDetail: productDetailsReducer,
}

const initialState = {}
const middleware = [thunk]

const store = configureStore({
	reducer,
	preloadedState: initialState,
	middleware,
})

export default store
