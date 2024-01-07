// store.js
// This file configures the Redux store with the root reducer.

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import the rootReducer

const store = configureStore({
  reducer: rootReducer, // Set the rootReducer as the store's reducer
});

export default store;
