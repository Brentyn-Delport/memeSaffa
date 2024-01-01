// authActions.js
import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

// Action to log in the user
export const loginUser = (username) => {
    return {
        type: LOGIN_USER,
        payload: username,
    };
};

// Possibly a new action for registering the user
export const registerUser = (userDetails) => {
    // userDetails might include username, email, etc.
    return {
        type: LOGIN_USER, // or a new action type if you differentiate between login and register
        payload: userDetails.username, // or the whole userDetails object, as needed
    };
};

// Action to log out the user
export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    };
};