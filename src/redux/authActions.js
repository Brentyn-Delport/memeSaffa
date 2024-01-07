// authActions.js: This file provides action creators related to authentication activities such as logging in, registering, and logging out users.

import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";

// Action creator for logging in the user
export const loginUser = (username) => {
  return {
    type: LOGIN_USER,
    payload: username,
  };
};

// Action creator for registering the user
export const registerUser = (userDetails) => {
  return {
    type: LOGIN_USER, // or a new action type if you differentiate between login and register
    payload: userDetails.username, // or the whole userDetails object, as needed
  };
};

// Action creator for logging out the user
export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
