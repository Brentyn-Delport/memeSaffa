// modalActions.js

import { SHOW_SIGN_IN_MODAL, SHOW_REGISTER_MODAL, HIDE_MODAL } from '../redux/actionTypes';

// Action to show the sign-in modal
export const showSignInModal = () => {
    return {
        type: SHOW_SIGN_IN_MODAL,
    };
};

// Action to show the register modal
export const showRegisterModal = () => {
    return {
        type: SHOW_REGISTER_MODAL,
    };
};

// Action to hide any modal
export const hideModal = () => {
    return {
        type: HIDE_MODAL,
    };
};
