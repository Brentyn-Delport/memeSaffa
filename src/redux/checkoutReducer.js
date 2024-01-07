// checkoutReducer.js
// This file contains the reducer for handling checkout-related state.

const initialCheckoutState = {
  orderDetails: null, // Details of the order being placed
  shippingInfo: {}, // Shipping information provided by the user
  paymentInfo: {}, // Payment information provided by the user
  isSubmitting: false, // Flag to indicate if the order is being submitted
  error: null, // Error information if submission fails
};

const checkoutReducer = (state = initialCheckoutState, action) => {
  switch (action.type) {
    case "SUBMIT_CHECKOUT":
      return {
        ...state,
        orderDetails: action.payload,
        isSubmitting: true, // Set submitting flag
      };
    case "UPDATE_SHIPPING_INFO":
      return {
        ...state,
        shippingInfo: action.payload,
      };
    case "UPDATE_PAYMENT_INFO":
      return {
        ...state,
        paymentInfo: action.payload,
      };
    // Handle more cases for errors, submission success, etc.
    default:
      return state;
  }
};

export default checkoutReducer;
