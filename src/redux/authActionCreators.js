import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      token: token,
      userId: userId,
    },
  };
};

export const authLoading = (isLoading) => {
  return {
    type: actionTypes.AUTH_LOADING,
    payload: isLoading,
  };
};

export const authFailed = (errMsg) => {
  return {
    type: actionTypes.AUTH_FAILED,
    payload: errMsg,
  };
};

export const auth = (email, password, mode) => (dispatch) => {
  dispatch(authLoading(true));
  const authData = {
    email: email,
    password: password,
  };

  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let authUrl = null;
  if (mode === "Sign Up") {
    authUrl = "http://127.0.0.1:8000/api/user/";
  } else {
    authUrl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  }

  axios
    .post(authUrl, authData, header)
    .then((response) => {
      dispatch(authLoading(false));
      // firebase part

      // console.log(response);
      // localStorage.setItem("token", response.data.idToken);
      // localStorage.setItem("userId", response.data.localId);
      // const expirationTime = new Date(
      //   new Date().getTime() + response.data.expiresIn * 1000
      // );
      // localStorage.setItem("expirationTime", expirationTime);
      // dispatch(authSuccess(response.data.idToken, response.data.localId));

      // django part
      console.log(response);
    })
    .catch((err) => {
      dispatch(authLoading(false));
      const key = Object.keys(err.response.data)[0];
      console.log(err.response.data[key]);
      dispatch(
        authFailed(`${key.toUpperCase()}: ${err.response.data[key]}`)
      );
      console.log(err.response);
    });
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authCheck = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    // Logout
    dispatch(logout());
  } else {
    const expirationTime = new Date(
      localStorage.getItem("expirationTime")
    );
    if (expirationTime <= new Date()) {
      // Logout
      dispatch(logout());
    } else {
      const userId = localStorage.getItem("userId");
      dispatch(authSuccess(token, userId));
    }
  }
};
