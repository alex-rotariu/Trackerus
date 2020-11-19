import {
  ADD_CURRENT_LOCATION,
  ADD_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  CHANGE_NAME,
  DISCARD_RECORDING,
  CONFIRM_TRACK,
  SAVE_TRACK_SUCCESS,
  SAVE_TRACK_FAIL
} from "../types";
import { navigate } from "../../navigation/RootNavigation";

import api from "../../api/axiosConfig";

export const addLocation = (location, recording) => (dispatch) => {
  dispatch({ type: ADD_CURRENT_LOCATION, payload: location });
  if (recording) {
    dispatch({ type: ADD_LOCATION, payload: location });
  }
};

export const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: name
  };
};

export const startRecording = () => {
  return { type: START_RECORDING };
};

export const stopRecording = () => {
  return { type: STOP_RECORDING };
};

export const reset = () => {
  return { type: RESET };
};

export const confirmTrack = () => {
  navigate("RecordSave");
  return { type: CONFIRM_TRACK };
};

export const saveTrack = (trackName, coordinates) => async (dispatch) => {
  try {
    const response = await api.post("/tracks/", {
      trackName,
      locations: coordinates
    });
    dispatch({ type: SAVE_TRACK_SUCCESS, payload: response.data });
    navigate("Profile");
  } catch (err) {
    dispatch({
      type: SAVE_TRACK_FAIL,
      payload: {
        errors: err.response.data.errors
      }
    });
  }
  return { type: SAVE_TRACK_SUCCESS };
};

export const discardTrack = () => {
  return { type: DISCARD_RECORDING };
};
