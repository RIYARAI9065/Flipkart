import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, onViewDetails, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title.slice(0, 30)}...</h4>
      <p><strong>₹{product.price.toFixed(0)}</strong></p>
      <Link to="/details">
        <button onClick={onViewDetails}>View Details</button>
      </Link>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
