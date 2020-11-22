import {
  FETCH_MY_TRACKS_SUCCESS,
  FETCH_MY_TRACKS_FAIL,
  FETCH_USER_TRACKS_SUCCESS,
  FETCH_USER_TRACKS_FAIL,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAIL,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_FAIL
} from "../types";

import api from "../../api/axiosConfig";

export const fetchMyTracks = () => async (dispatch, getState) => {
  try {
    const response = await api.get("/tracks");
    dispatch({ type: FETCH_MY_TRACKS_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: FETCH_MY_TRACKS_FAIL });
  }
};