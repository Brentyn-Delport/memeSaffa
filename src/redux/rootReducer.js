// rootReducer.js

import { combineReducers } from 'redux';
import modalReducer from '../redux/modalReducer';
import authReducer from '../redux/authReducer';
import cartReducer from '../redux/cartReducer';

const rootReducer = combineReducers({
    modal: modalReducer,
    auth: authReducer,
    cart: cartReducer
});

export default rootReducer;
