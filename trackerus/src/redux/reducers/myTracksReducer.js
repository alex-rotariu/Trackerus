import { FETCH_MY_TRACKS_SUCCESS, FETCH_MY_TRACKS_FAIL, USER_SIGNOUT } from "../types";

export default (state = [], action) => {
  switch (action.type) {
    // TO DO
    // dont forget to check if fetched tracks are exactly
    // the same as stored tracks
    case FETCH_MY_TRACKS_SUCCESS: {
      return action.payload;
    }
    case FETCH_MY_TRACKS_FAIL:
      return state;
    case USER_SIGNOUT:
      return []
    default:
      return state;
  }
};
