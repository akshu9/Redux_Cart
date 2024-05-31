// src/components/CartCount.js
import React from 'react';
import { useSelector } from 'react-redux';

const CartCount = () => {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.length;

  return (
    <div className="cart-count">
      <span>Cart<sup>{cartCount}</sup></span>
    </div>
  );
};

export default CartCount;
