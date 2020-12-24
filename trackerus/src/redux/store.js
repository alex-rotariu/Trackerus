import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const composeEnhanvers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: { loading: false, user: { profilePic: {}, followed: [] }, token: "" },
  location: {
    recording: false,
    locations: [],
    currentLocation: null,
    trackName: ""
  }
};

export const store = createStore(
  reducers,
  initialState,
  composeEnhanvers(applyMiddleware(thunk))
);
