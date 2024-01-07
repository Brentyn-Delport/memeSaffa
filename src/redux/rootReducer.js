// rootReducer.js

// The rootReducer combines multiple reducers into a single root reducer.
// It's used to create the main Redux store for your application.

import { combineReducers } from "redux";
import modalReducer from "../redux/modalReducer";
import authReducer from "../redux/authReducer";
import cartReducer from "../redux/cartReducer";
import checkoutReducer from "../redux/checkoutReducer";

// Combine all reducers into one root reducer
const rootReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
});

export default rootReducer;
