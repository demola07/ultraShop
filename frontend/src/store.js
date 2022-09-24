import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { productListReducer } from './reducers/productReducers'

const reducer = {
	productList: productListReducer,
}

const initialState = {}
const middleware = [thunk]

const store = configureStore({
	reducer,
	preloadedState: initialState,
	middleware,
})

export default store
