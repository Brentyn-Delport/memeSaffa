// App.js 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={false} username={"Username"} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Additional Routes will go here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

