import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';  // Importing the Redux store
import './index.css';  // Importing global styles
import App from './App';  // Importing the main App component
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap 
import '@fortawesome/fontawesome-free/css/fontawesome.css'; // FontAwesome for icons
import '@fortawesome/fontawesome-free/css/solid.css'; // Solid icons
import '@fortawesome/fontawesome-free/css/regular.css'; // Regular style icons
import '@fortawesome/fontawesome-free/css/brands.css'; // Brand icons for social media etc.

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrapping the App component with Provider to pass down the Redux store
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// reportWebVitals is a tool to measure and analyze performance of your React app.
// You can pass a callback to send the results to a tracking or analytics endpoint.
// Learn more about this at the provided link.
// If you don't need to measure performance, you can safely remove this.
reportWebVitals();
