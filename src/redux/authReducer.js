// authReducer.js

import { LOGIN_USER, LOGOUT_USER } from '../redux/actionTypes';

const initialState = {
    isLoggedIn: false,
    username: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, isLoggedIn: true, username: action.payload };
        case LOGOUT_USER:
            return { ...state, isLoggedIn: false, username: '' };
        default:
            return state;
    }
};

export default authReducer;
