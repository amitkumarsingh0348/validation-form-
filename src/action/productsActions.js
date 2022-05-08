import axios from "axios";
import { ActionTypes } from "../action/action-types.js";

export const wordsFetchData = async (response) => {

  try {
    return { type: ActionTypes.WORDS_FETCH_DATA_SUCCESS, payload: response.data };
  } catch (err) {
    console.log(err);
  }
}
