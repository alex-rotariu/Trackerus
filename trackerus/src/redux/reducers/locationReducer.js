import {
  ADD_CURRENT_LOCATION,
  ADD_LOCATION,
  CHANGE_NAME,
  CONFIRM_TRACK,
  DISCARD_RECORDING,
  START_RECORDING,
  STOP_RECORDING
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
      return state;
    }
    case DISCARD_RECORDING: {
      return { ...state, locations: [] };
    }
    default:
      return state;
  }
};
