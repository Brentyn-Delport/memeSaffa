// cartReducer.js
// This file contains the reducer for handling shopping cart-related state.

const initialState = {
    items: [], // Array of product items
    totalPrice: 0, // Total price of items in ZAR
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            // Destructure necessary properties from payload
            const { product, quantity, size, deliveryOption } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.product.id === product.id && item.size === size && item.deliveryOption === deliveryOption);
            
            let updatedItems = [...state.items];
            let itemTotalPrice = 0;  // Total price for this item

            if (existingItemIndex >= 0) {
                // If item exists, update the quantity
                let updatedItem = { ...updatedItems[existingItemIndex] };
                updatedItem.quantity += quantity;  // Increase quantity
                updatedItems[existingItemIndex] = updatedItem;
                itemTotalPrice = updatedItem.product.price * updatedItem.quantity;
            } else {
                // Add a new item to the cart
                updatedItems.push({
                    product,
                    quantity,
                    size,
                    deliveryOption
                });
                itemTotalPrice = product.price * quantity;  // Calculate the price for this new item
            }

            // Calculate the new total price
            const newTotal = state.totalPrice + itemTotalPrice;
            return {
                ...state,
                items: updatedItems,
                totalPrice: newTotal,
            };
        }
        case 'REMOVE_ITEM': {
            const itemId = action.payload;  
            const remainingItems = state.items.filter(item => item.product.id !== itemId);
            
            // Calculate the new total price
            const updatedTotal = remainingItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
            return {
                ...state,
                items: remainingItems,
                totalPrice: updatedTotal,
            };
        }
        default:
            return state;
    }
};

export default cartReducer;
