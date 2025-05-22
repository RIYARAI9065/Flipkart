import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">🛒Flipkart</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart"><span>🛒</span>Cart ({cartCount})</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
