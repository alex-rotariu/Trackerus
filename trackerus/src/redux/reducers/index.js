import { combineReducers } from "redux";

import userReducer from "./userReducer";
import locatinReducer from "./locationReducer";

export default combineReducers({
  user: userReducer,
  location: locatinReducer
});
