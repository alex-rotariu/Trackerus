import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  USER_SIGNOUT,
  SET_CURRENT_USER,
  FETCH_USER_TRACKS_SUCCESS,
  FETCH_USER_TRACKS_FAIL,
  FETCH_USER_TRACKS_REQUEST,
  CLEAN_USER_TRACKS,
  FOLLOW_USER,
  CLEAR_USERS,
  TRACK_LIKE_SUCCESS,
  TRACK_LIKE_FAIL
} from "../types";

export default (
  state = { currentUser: null, users: [], tracks: [] },
  action
) => {
  switch (action.type) {
    case TRACK_LIKE_SUCCESS: {
      updatedTacks = state.tracks.map((track) => {
        if (track._id === action.payload.track._id)
          return { ...track, likes: action.payload.track.likes };
        else return track;
      });
      return { ...state, tracks: updatedTacks };
    }
    case TRACK_LIKE_FAIL: {
      return state;
    }
    case FOLLOW_USER:
      updatedUsers = state.users.map((user) => {
        if (user._id !== action.payload.follower.followerId) {
          return user;
        } else {
          return {
            ...user,
            followerCount: action.payload.follower.delete
              ? user.followerCount - 1
              : user.followerCount + 1
          };
        }
      });
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          followerCount: action.payload.follower.delete
            ? state.currentUser.followerCount - 1
            : state.currentUser.followerCount + 1
        },
        users: updatedUsers
      };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case FETCH_USERS_FAIL:
      return state;
    case CLEAR_USERS:
      return { ...state, users: [] };
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case USER_SIGNOUT:
      return { currentUser: {}, users: [], tracks: [] };
    case FETCH_USER_TRACKS_SUCCESS:
      return { ...state, tracks: action.payload };
    case FETCH_USER_TRACKS_FAIL:
      return state;
    case CLEAN_USER_TRACKS:
      return { ...state, tracks: [] };
    default:
      return state;
  }
};
