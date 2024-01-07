// authReducer.js

// This reducer manages the authentication state.
// It keeps track of whether a user is logged in and the user's username.

import { LOGIN_USER, LOGOUT_USER } from "../redux/actionTypes";

// Initial state for authentication
const initialState = {
  isLoggedIn: false,
  username: "",
};

// Reducer function that updates the authentication state based on the dispatched action
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      // Set isLoggedIn to true and update the username when a user logs in
      return { ...state, isLoggedIn: true, username: action.payload };
    case LOGOUT_USER:
      // Set isLoggedIn to false and clear the username when a user logs out
      return { ...state, isLoggedIn: false, username: "" };
    default:
      // Return the current state for any other action
      return state;
  }
};

export default authReducer;
