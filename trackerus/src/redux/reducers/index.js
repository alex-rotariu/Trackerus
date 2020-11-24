import { combineReducers } from "redux";

import userReducer from "./myUserReducer";
import locatinReducer from "./locationReducer";
import userTracksReducer from "./userTracksReducer";
import myTracksReducer from "./myTracksReducer";
import usersSearchReducer from "./usersSearchReducer";

export default combineReducers({
  user: userReducer,
  location: locatinReducer,
  userTracks: userTracksReducer,
  myTracks: myTracksReducer,
  search: usersSearchReducer
});
