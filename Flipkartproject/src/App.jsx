import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Router>
      {isLoggedIn && <Navbar cartCount={cartItems.length} />}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home
                setSelectedProduct={setSelectedProduct}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/details"
          element={
            isLoggedIn ? <ProductDetails product={selectedProduct} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/cart"
          element={
            isLoggedIn ? <Cart cartItems={cartItems} setCartItems={setCartItems} /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
