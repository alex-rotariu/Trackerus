import {
  ADD_CURRENT_LOCATION,
  ADD_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  CHANGE_NAME,
  DISCARD_RECORDING,
  CONFIRM_TRACK
} from "../types";

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
  return { type: CONFIRM_TRACK };
};

export const discardTrack = () => {
  return { type: DISCARD_RECORDING };
};
