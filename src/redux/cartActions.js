// cartActions.js
// This file contains action creators for managing shopping cart actions.

export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    };
};

export const removeItem = (itemId) => {
    return {
        type: 'REMOVE_ITEM',
        payload: itemId
    };
};
