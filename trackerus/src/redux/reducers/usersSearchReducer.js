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
  // Remain here. for loop on state.users in order to modify counts
  switch (action.type) {
    case FOLLOW_USER:
      updatedUsers = state.users.map(user => {
        if (user._id !== action.payload.follower.followerId) {
          return user
        } else {
          return {
            ...user,
            followerCount: action.payload.follower.delete ? user.followerCount - 1 : user.followerCount + 1
          }
        }
      })
      return {
        ...state,
        currentUser: { ...state.currentUser, followerCount: action.payload.follower.delete ? state.currentUser.followerCount - 1 : state.currentUser.followerCount + 1 },
        users: updatedUsers
      }
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
