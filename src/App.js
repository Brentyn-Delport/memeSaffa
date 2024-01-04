// App.js 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showSignInModal, showRegisterModal, hideModal } from '../src/redux/modalActions'; 
import SignIn from './Components/SignIn'; // Adjust the path as necessary
import Register from './Components/Register'; // Adjust the path as necessary
import Header from './Components/Header';
import Home from './Components/Home';
import Merchandise from './Components/Merchandise'; // Make sure this is correct
import Cart from './Components/Cart'; // Import Cart component
import ContactPage from './Components/Contact';
import Footer from './Components/Footer'; // Adjust path as necessary
import './App.css'; 

function App() {
  const dispatch = useDispatch();

  return (
    <Router>
        <Header />
        <Routes> {/* Define each Route within Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/cart" element={<Cart />} /> {/* Add route for Cart */}
            <Route path="/contactpage" element={<ContactPage />} /> {/* Add route for Cart */}

            {/* Add other routes as needed */}
        </Routes>
        <SignIn />
        <Register />
        <Footer /> 
    </Router>
);
}

export default App;


