import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL, USER_SIGNOUT,
  SET_CURRENT_USER, FETCH_USER_TRACKS_SUCCESS,
  FETCH_USER_TRACKS_FAIL,
  FETCH_USER_TRACKS_REQUEST,
  CLEAN_USER_TRACKS,
  FOLLOW_USER
} from "../types";

export default (state = { currentUser: null, users: [], tracks: [] }, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case FETCH_USERS_FAIL:
      return state;
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    case USER_SIGNOUT:
      return { currentUser: {}, users: [], tracks: [] }
    case FETCH_USER_TRACKS_SUCCESS:
      return { ...state, tracks: action.payload }
    case FETCH_USER_TRACKS_FAIL:
      return state
    case CLEAN_USER_TRACKS:
      return { ...state, tracks: [] }
    default:
      return state;
  }
};
