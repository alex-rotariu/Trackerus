import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const composeEnhanvers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: { loading: false, user: null, token: "" }
};

export const store = createStore(
  reducers,
  initialState,
  composeEnhanvers(applyMiddleware(thunk))
);