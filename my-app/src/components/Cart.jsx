import React from 'react';
import cartIcon from './cart.png';

function Cart({ cartItems, handleRemoveFromCart, handleCalculateBill }) {
  return (
    <div className="Cart">
      <button className="CartButton" onClick={handleCalculateBill}>
        <img src={cartIcon} alt="Cart Icon" /> Order
      </button>
      <div className="CartItems">
        <h2>Cart</h2>
        {cartItems.map(item => (
          <div key={item.id}>
            {item.name} - Rs.{item.cost} - Quantity: {item.quantity}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
