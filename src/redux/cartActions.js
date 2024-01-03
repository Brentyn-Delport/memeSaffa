// cartActions.js

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

// Add more actions as needed, such as updating item quantity or clearing the cart
