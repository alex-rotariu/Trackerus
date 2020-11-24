import { FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from "../types";

export default (state = { currentUser: null, users: [] }, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case FETCH_USERS_FAIL:
      return state;
    default:
      return state;
  }
};
