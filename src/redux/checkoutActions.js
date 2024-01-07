// checkoutActions.js
// This file contains action creators for managing checkout-related actions.

// Action to submit the checkout form
export const submitCheckout = (orderDetails) => {
  return {
    type: "SUBMIT_CHECKOUT",
    payload: orderDetails,
  };
};

// Action to update shipping information
export const updateShippingInfo = (shippingInfo) => {
  return {
    type: "UPDATE_SHIPPING_INFO",
    payload: shippingInfo,
  };
};

// Action to update payment information
export const updatePaymentInfo = (paymentInfo) => {
  return {
    type: "UPDATE_PAYMENT_INFO",
    payload: paymentInfo,
  };
};
