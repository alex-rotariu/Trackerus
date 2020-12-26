import { combineReducers } from "redux";

import userReducer from "./myUserReducer";
import locatinReducer from "./locationReducer";
import myTracksReducer from "./myTracksReducer";
import usersSearchReducer from "./usersSearchReducer";

export default combineReducers({
  user: userReducer,
  location: locatinReducer,
  myTracks: myTracksReducer,
  search: usersSearchReducer
});
