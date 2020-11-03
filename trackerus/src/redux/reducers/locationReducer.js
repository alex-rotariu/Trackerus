import { ADD_CURRENT_LOCATION, ADD_LOCATION } from "../types";

export default (state = null, action) => {
  // console.log(action);
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case ADD_LOCATION:
      return { ...state, locations: [...state.locations, action.payload] };
    default:
      return state;
  }
};
