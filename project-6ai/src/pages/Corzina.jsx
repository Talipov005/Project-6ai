import React from 'react';
import './Corzina.scss';
import { useCart } from '../contexts/CartContext';

function Corzina() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p className="empty">Корзина пуста</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="info">
                <h3>{item.name}</h3>
                <p>{item.price} x {item.quantity}</p>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    min="1"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
              </div>
            </div>
          ))}
          
          <button className="clear-cart" onClick={clearCart}>
            Очистить корзину
          </button>
        </>
      )}
    </div>
  );
}

export default Corzina;