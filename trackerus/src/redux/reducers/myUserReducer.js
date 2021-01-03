import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNOUT,
  SAVE_TRACK_SUCCESS,
  FOLLOW_USER
} from "../types";

export default (state = null, action) => {
  // console.log(state);
  switch (action.type) {
    case USER_SIGNUP_FAIL:
      return state;
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
        token: action.payload.token
      };
    case USER_SIGNOUT:
      return {
        ...state,
        user: {
          profilePic: {},
          followed: [],
          following: []
        },
        token: null
      };
    case USER_SIGNIN_FAIL:
      return state;
    case USER_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
        token: action.payload.token
      };
    case SAVE_TRACK_SUCCESS: {
      return {
        ...state,
        user: { ...state.user, trackCount: state.user.trackCount + 1 }
      };
    }
    case FOLLOW_USER: {
      if (!action.payload.follower.delete) {
        let newFollowed = state.user.followed;
        newFollowed.push(action.payload.follower);
        return {
          ...state,
          user: {
            ...state.user,
            followingCount: state.user.followingCount + 1,
            followed: newFollowed
          }
        };
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            followingCount: state.user.followingCount - 1,
            followed: state.user.followed.filter((follower) => {
              return action.payload.follower._id !== follower._id;
            })
          }
        };
      }
    }
    default:
      return state;
  }
};
