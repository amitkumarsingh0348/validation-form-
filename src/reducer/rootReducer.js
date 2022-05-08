import { combineReducers } from '@reduxjs/toolkit'
import { fetchedproductsReducer } from './LoginReducer';

const reducer = combineReducers({
    allproduct: fetchedproductsReducer
});

export default reducer;