// modalReducer.js

import { SHOW_SIGN_IN_MODAL, SHOW_REGISTER_MODAL, HIDE_MODAL } from '../redux/actionTypes';

const initialState = {
    showSignIn: false,
    showRegister: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SIGN_IN_MODAL:
            return { ...state, showSignIn: true };
        case SHOW_REGISTER_MODAL:
            return { ...state, showRegister: true };
        case HIDE_MODAL:
            return { ...state, showSignIn: false, showRegister: false };
        default:
            return state;
    }
};

export default modalReducer;
