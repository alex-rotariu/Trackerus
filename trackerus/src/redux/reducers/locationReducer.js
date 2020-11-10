import { ADD_CURRENT_LOCATION, ADD_LOCATION, CHANGE_NAME } from "../types";

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
    default:
      return state;
  }
};
