import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL
} from "../types";

export default (state, action) => {
  console.log(state);
  switch (action.type) {
    default:
      return state;
  }
};
