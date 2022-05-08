import { ActionTypes } from "../action/action-type.js";



export const fetchedproductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.WORDS_FETCH_DATA_SUCCESS:
            return { ...state, products: payload };
        default:
            return state;
    }
};


