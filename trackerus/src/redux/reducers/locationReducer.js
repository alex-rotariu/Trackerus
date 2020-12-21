import {
  ADD_CURRENT_LOCATION,
  ADD_LOCATION,
  CHANGE_NAME,
  CONFIRM_TRACK,
  DISCARD_RECORDING,
  SAVE_TRACK_SUCCESS,
  START_RECORDING,
  STOP_RECORDING,
  USER_SIGNOUT
} from "../types";

export default (state = null, action) => {
  // console.log(action);
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case ADD_LOCATION:
      return { ...state, locations: [...state.locations, action.payload] };
    case CHANGE_NAME: {
      return { ...state, trackName: action.payload };
    }
    case START_RECORDING: {
      return { ...state, recording: true };
    }
    case STOP_RECORDING: {
      return { ...state, recording: false };
    }
    case CONFIRM_TRACK: {
      return { ...state, distance: action.payload };
    }
    case DISCARD_RECORDING: {
      return { ...state, locations: [] };
    }
    case SAVE_TRACK_SUCCESS: {
      return { ...state, distance: 0, locations: [], trackName: "" };
    }
    case USER_SIGNOUT: {
      return {
        recording: false,
        locations: [],
        currentLocation: null,
        trackName: ""
      }
    }
    default:
      return state;
  }
};
