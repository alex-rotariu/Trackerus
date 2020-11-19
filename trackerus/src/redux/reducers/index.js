import { combineReducers } from "redux";

import userReducer from "./userReducer";
import locatinReducer from "./locationReducer";
import userTracksReducer from "./userTracksReducer";
import myTracksReducer from "./myTracksReducer";

export default combineReducers({
  user: userReducer,
  location: locatinReducer,
  userTracks: userTracksReducer,
  myTracks: myTracksReducer
});
