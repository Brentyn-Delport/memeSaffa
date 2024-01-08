// App.js
// This is the main application file for my Meme themed merchandise website.
// It sets up routing for the entire application using React Router and includes global components like Header and Footer.
// It is responsible for defining the navigation structure and rendering the main page components based on the current route.

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn"; // Component for user sign in
import Register from "./Components/Register"; // Component for user registration
import Header from "./Components/Header"; // Global Header component
import Home from "./Components/Home"; // Home page component
import Merchandise from "./Components/Merchandise"; // Merchandise page component
import Cart from "./Components/Cart"; // Shopping cart component
import Checkout from "./Components/Checkout"; // Checkout page component
import ContactPage from "./Components/Contact"; // Contact page component
import Footer from "./Components/Footer"; // Global Footer component
import "./App.css"; // Application-wide styles

function App() {
  // Local state for registered users
  const [registeredUsers, setRegisteredUsers] = useState([]);

  return (
    <Router>
      {/* Header is displayed across all routes */}
      <Header />
      {/* Routes define different pages based on the URL path */}
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />
        {/* Route for the Merchandise page */}
        <Route path="/merchandise" element={<Merchandise />} />
        {/* Route for the Cart page */}
        <Route path="/cart" element={<Cart />} />
        {/* Route for the Checkout page */}
        <Route path="/checkout" element={<Checkout />} />
        {/* Route for the Contact page */}
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
      {/* SignIn and Register Modals that can be triggered from anywhere in the app */}
      <SignIn registeredUsers={registeredUsers} />
      <Register setRegisteredUsers={setRegisteredUsers} />
      {/* Footer is displayed across all routes */}
      <Footer />
    </Router>
  );
}

export default App;
