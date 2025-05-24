import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDescription from './pages/ProductDescription';
import Mens from './pages/Mens';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="bg-black text-white font-sans">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/product-description" element={<ProductDescription />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
