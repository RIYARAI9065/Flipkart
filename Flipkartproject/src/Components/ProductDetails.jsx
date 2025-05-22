import React from 'react';

function ProductDetails({ product }) {
  if (!product) return <p>No product selected.</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p><strong>₹{product.price.toFixed(0)}</strong></p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
