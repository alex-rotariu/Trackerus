import { combineReducers } from "redux";

import userReducer from "./myUserReducer";
import locatinReducer from "./locationReducer";
import myTracksReducer from "./myTracksReducer";
import usersSearchReducer from "./usersSearchReducer";
import feedReducer from "./feedReducer";

export default combineReducers({
  user: userReducer,
  location: locatinReducer,
  myTracks: myTracksReducer,
  search: usersSearchReducer,
  feed: feedReducer
});
