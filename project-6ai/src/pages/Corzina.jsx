import React from 'react';
import './Corzina.scss';

function Corzina({ cartItems }) {
  return (
    <div className="cart-container">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p className="empty">Корзина пуста</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="info">
              <h3>{item.name}</h3>
              <p>{item.price} x {item.quantity}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Corzina;
