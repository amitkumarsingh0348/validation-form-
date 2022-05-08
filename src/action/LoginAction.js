import { ActionTypes } from "../action/action-type.js";

export const wordsFetchData = async (response) => {
  try {
    return { type: ActionTypes.WORDS_FETCH_DATA_SUCCESS, payload: response };
  } catch (err) {
    console.log(err);
  }
}
