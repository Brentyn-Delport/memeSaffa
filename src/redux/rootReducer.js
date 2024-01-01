// rootReducer.js

import { combineReducers } from 'redux';
import modalReducer from '../redux/modalReducer';
import authReducer from '../redux/authReducer';

const rootReducer = combineReducers({
    modal: modalReducer,
    auth: authReducer,
});

export default rootReducer;
