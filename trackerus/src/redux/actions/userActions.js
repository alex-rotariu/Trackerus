import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../../navigation/RootNavigation";

import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNOUT
} from "../types";

import api from "../../api/axiosConfig";

export const signup = ({
  username,
  email,
  fullName,
  dateOfBirth,
  password,
  confirmPassword
}) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });
    const response = await api.post("/auth/signup", {
      username,
      email,
      fullName,
      dateOfBirth,
      password,
      confirmPassword
    });
    // console.log(response);
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: response.data });
    navigate("Authenticated");
  } catch (err) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: { errors: err.response.data.errors }
    });
  }
};

export const signin = ({ username, password }) => async (dispatch) => {
  let response;
  try {
    dispatch({ type: USER_SIGNIN_REQUEST });
    response = await api.post("/auth/signin", {
      username,
      password
    });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: response.data });
    navigate("Authenticated");
  } catch (err) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: { errors: err.response.data.errors }
    });
  }
};

export const signout = () => async (dispatch) => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: USER_SIGNOUT });
  navigate("NotAuthenticated");
};
