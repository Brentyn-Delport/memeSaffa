// cartReducer.test.js
import cartReducer from '../redux/cartReducer'; 
import { addItem, removeItem } from '../redux/cartActions'; 

describe('Cart Reducer', () => {
  // Test for initial state
  test('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual({
      items: [],
      totalPrice: 0,
    });
  });

  // Test for adding item
  test('should handle adding an item', () => {
    const previousState = {
      items: [],
      totalPrice: 0,
    };

    const newItem = {
      product: { id: 1, price: 100 },
      quantity: 1,
      size: 'M',
      deliveryOption: 'Standard',
    };

    expect(
      cartReducer(previousState, addItem(newItem))
    ).toEqual({
      items: [newItem],
      totalPrice: 100, 
    });
  });

  // Test for removing item
  test('should handle removing an item', () => {
    const previousState = {
      items: [
        {
          product: { id: 1, price: 100 },
          quantity: 1,
          size: 'M',
          deliveryOption: 'Standard',
        },
      ],
      totalPrice: 100,
    };

    expect(
      cartReducer(previousState, removeItem(1))
    ).toEqual({
      items: [],
      totalPrice: 0,
    });
  });

 // Test for total price calculation
test('should calculate total price correctly', () => {
    const initialState = {
      items: [],
      totalPrice: 0,
    };
  
    // Add first item
    const firstItem = {
      product: { id: 1, price: 200 },
      quantity: 2, // 400
      size: 'M',
      deliveryOption: 'Standard',
    };
    const stateAfterFirstAdd = cartReducer(initialState, addItem(firstItem));
  
    // Add second item
    const secondItem = {
      product: { id: 2, price: 150 },
      quantity: 1, // 150
      size: 'M',
      deliveryOption: 'Standard',
    };
    const finalState = cartReducer(stateAfterFirstAdd, addItem(secondItem));
  
    expect(finalState.totalPrice).toEqual(550); // 400 + 150
  });
  
});
