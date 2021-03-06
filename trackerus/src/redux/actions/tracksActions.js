import {
  FETCH_MY_TRACKS_SUCCESS,
  FETCH_MY_TRACKS_FAIL,
  FETCH_USER_TRACKS_SUCCESS,
  FETCH_USER_TRACKS_FAIL,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAIL,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_FAIL,
  TRACK_LIKE_FAIL,
  TRACK_LIKE_SUCCESS
} from "../types";

import api from "../../api/axiosConfig";

export const fetchMyTracks = () => async (dispatch) => {
  try {
    const response = await api.get("/tracks");
    dispatch({ type: FETCH_MY_TRACKS_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: FETCH_MY_TRACKS_FAIL });
  }
};

export const fetchFeed = () => async (dispatch) => {
  try {
    const response = await api.get("/followers/feed");
    dispatch({ type: FETCH_FEED_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: FETCH_FEED_FAIL });
  }
};

export const likeTrack = (trackId) => async (dispatch) => {
  try {
    const response = await api.post("/tracks/like", { trackId: trackId });
    dispatch({ type: TRACK_LIKE_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: TRACK_LIKE_FAIL });
  }
};
