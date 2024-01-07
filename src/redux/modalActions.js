// modalActions.js: This file contains action creators for managing modal states such as showing and hiding the sign-in and registration modals.

import { SHOW_SIGN_IN_MODAL, SHOW_REGISTER_MODAL, HIDE_MODAL } from './actionTypes';

// Action creator for showing the sign-in modal
export const showSignInModal = () => {
    return {
        type: SHOW_SIGN_IN_MODAL,
    };
};

// Action creator for showing the register modal
export const showRegisterModal = () => {
    return {
        type: SHOW_REGISTER_MODAL,
    };
};

// Action creator for hiding any modal (both sign-in and register)
export const hideModal = () => {
    return {
        type: HIDE_MODAL,
    };
};
