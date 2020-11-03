import { ADD_CURRENT_LOCATION, ADD_LOCATION } from "../types";

export const addLocation = (location, recording) => (dispatch) => {
  dispatch({ type: ADD_CURRENT_LOCATION, payload: location });
  if (recording) {
    dispatch({ type: ADD_LOCATION, payload: location });
  }
};
