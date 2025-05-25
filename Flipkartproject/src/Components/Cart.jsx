function Cart({ cartItems, setCartItems }) {
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="cart">
      <h2>My Cart ({cartItems.length} items)</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.title} />
              <div className="cart-info">
                <h4>{item.title.slice(0, 50)}...</h4>
                <p>₹{item.price.toFixed(0)}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Cart;