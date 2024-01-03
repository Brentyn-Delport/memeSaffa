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
            {/* Add other routes as needed */}
        </Routes>
        <SignIn />
        <Register />
        <Footer /> 
    </Router>
);
}

export default App;


