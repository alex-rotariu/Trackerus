import { FETCH_FEED_FAIL, FETCH_FEED_SUCCESS, USER_SIGNOUT } from "../types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FEED_SUCCESS:
      return { ...state, posts: action.payload };
    case FETCH_FEED_FAIL:
      return state;
    case USER_SIGNOUT:
      return [];
    default:
      return state;
  }
};
