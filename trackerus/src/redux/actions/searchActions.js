import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  SET_CURRENT_USER,
  FETCH_USER_TRACKS_SUCCESS,
  CLEAN_USER_TRACKS,
  FOLLOW_USER,
  CLEAR_USERS
} from "../types";

import api from "../../api/axiosConfig";

export const fetchUsers = (name) => async (dispatch) => {
  try {
    const response = await api.get("/users", { params: { name } });
    // console.log(response.data);
    dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (err) {}
};

export const clearUsers = () => {
  return { type: CLEAR_USERS };
};

export const setCurrentUser = (user) => {
  return { type: SET_CURRENT_USER, payload: user };
};

export const cleanUserTracks = () => {
  return { type: CLEAN_USER_TRACKS };
};

export const fetchUserTracks = (userId) => async (dispatch) => {
  try {
    const response = await api.get("/tracks/" + userId);
    dispatch({ type: FETCH_USER_TRACKS_SUCCESS, payload: response.data });
  } catch (err) {}
};

export const followUser = (userId) => async (dispatch) => {
  try {
    const response = await api.post("/followers", { followerId: userId });
    dispatch({ type: FOLLOW_USER, payload: response.data });
  } catch (err) {}
};
