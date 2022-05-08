import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from '@reduxjs/toolkit'
import reducer from "./rootReducer";


const store = configureStore({reducer,composeWithDevTools});

export default store;