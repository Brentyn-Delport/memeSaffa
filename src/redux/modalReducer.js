// modalReducer.js
// This reducer handles the state related to the display of modals.
// It manages whether the sign-in and register modals are currently shown or hidden.

import {
  SHOW_SIGN_IN_MODAL,
  SHOW_REGISTER_MODAL,
  HIDE_MODAL,
} from "../redux/actionTypes";

// Initial state for the modals
const initialState = {
  showSignIn: false,
  showRegister: false,
};

// Reducer function that updates the state based on the dispatched action
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SIGN_IN_MODAL:
      // Show the sign-in modal
      return { ...state, showSignIn: true };
    case SHOW_REGISTER_MODAL:
      // Show the register modal
      return { ...state, showRegister: true };
    case HIDE_MODAL:
      // Hide both modals
      return { ...state, showSignIn: false, showRegister: false };
    default:
      // Return the current state for any other action
      return state;
  }
};

export default modalReducer;
