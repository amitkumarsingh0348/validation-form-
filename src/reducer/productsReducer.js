import { ActionTypes } from "../action/action-types.js";

require('dotenv').config()

const intialState = {
  products: [
    { "id": 12 }
  ],
};


//WORDS_FETCH_DATA_SUCCESS:
export const fetchedproductsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.WORDS_FETCH_DATA_SUCCESS:
      return { ...state, products: payload };
    default:
      return state;
  }
};


