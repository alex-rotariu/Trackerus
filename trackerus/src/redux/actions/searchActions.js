import { FETCH_USERS_SUCCESS, FETCH_USERS_FAIL, SET_CURRENT_USER } from "../types";

import api from "../../api/axiosConfig";

export const fetchUsers = (name) => async (dispatch) => {
  try {
    const response = await api.get("/users", { params: { name } });
    // console.log(response.data);
    dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (err) { }
};

export const setCurrentUser = (user) => {
  return { type: SET_CURRENT_USER, payload: user }
}