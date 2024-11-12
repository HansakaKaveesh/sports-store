// src/components/CartItem.js
import React from "react";
import "./CartItem.css";

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <div className="item-quantity">
          <button onClick={() => addToCart(item)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
