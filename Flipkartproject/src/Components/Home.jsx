import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function Home({ setSelectedProduct, cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="home">
      <h1>Shop the Best Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={() => setSelectedProduct(product)}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
