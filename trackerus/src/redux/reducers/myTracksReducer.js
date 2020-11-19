import { FETCH_MY_TRACKS_SUCCESS, FETCH_MY_TRACKS_FAIL } from "../types";

export default (state = [], action) => {
  // console.log(action.payload);
  switch (action.type) {
    // TO DO
    // dont forget to check if fetched tracks are exactly
    // the same as stored tracks
    case FETCH_MY_TRACKS_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};
