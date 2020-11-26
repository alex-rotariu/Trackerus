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
import useCalculateDistance from "../../hooks/useCalculateDistance";

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

export const confirmTrack = (coordinates) => {
  const [distance] = useCalculateDistance(coordinates);
  navigate("RecordSave");
  return { type: CONFIRM_TRACK, payload: distance };
};

export const saveTrack = (navigation) => async (dispatch, getState) => {
  const state = getState();
  const location = state.location;
  try {
    const response = await api.post("/tracks/", {
      trackName: location.trackName,
      locations: location.locations,
      distance: location.distance
    });
    console.log(response.data);
    dispatch({ type: SAVE_TRACK_SUCCESS, payload: response.data });
    navigation.pop();
    navigate("Profile");
  } catch (err) {
    console.log(err);
    navigation.pop();
    navigate("RecordCreate");
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
