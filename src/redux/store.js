// store.js
import { createStore } from 'redux';
import rootReducer from './rootReducer'; // Adjust the path to your rootReducer

const store = createStore(rootReducer);

export default store;

