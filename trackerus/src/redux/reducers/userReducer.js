import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNOUT
} from "../types";

export default (state = null, action) => {
  // console.log(action);
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
        user: null,
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
    default:
      return state;
  }
};
