import React, { useState } from 'react';
import './Corzina.scss';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';

function Corzina() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const [orderDetails, setOrderDetails] = useState({
    phone: '',
    email: '',
    name: '',
    comment: '',
    address: ''
  });

  // Helper function to parse price and ensure it's a valid number
  const parsePrice = (price) => {
    if (!price) return 0;
    // Convert to string, remove non-numeric characters except decimal point
    const cleanedPrice = String(price).replace(/[^\d.]/g, '');
    return parseFloat(cleanedPrice) || 0;
  };

  // Helper function to clean and parse weight
  const parseWeight = (weight) => {
    if (!weight) return 0;
    const cleanedWeight = String(weight).replace(/[^\d.]/g, '');
    return parseFloat(cleanedWeight) || 0;
  };

  // Calculate totals with type safety
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parsePrice(item.price);
    const quantity = Number(item.quantity) || 0;
    return sum + price * quantity;
  }, 0);

  const totalItems = cartItems.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);

  const totalWeight = cartItems.reduce((sum, item) => {
    const weight = parseWeight(item.weight);
    const quantity = Number(item.quantity) || 0;
    return sum + weight * quantity;
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Корзина пуста! Добавьте товары перед оформлением заказа.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }

    const { phone, email, name, address } = orderDetails;
    if (!phone || !email || !name || !address) {
      toast.error('Пожалуйста, заполните все обязательные поля (телефон, email, имя, адрес).', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }

    toast.success('Заказ успешно оформлен! Спасибо за покупку.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
    clearCart();
    setOrderDetails({ phone: '', email: '', name: '', comment: '', address: '' });
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2>Корзина</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Корзина пуста</p>
        ) : (
          <>
            {cartItems.map((item, index) => {
              const isFavorite = favorites.some((fav) => fav.id === item.id);
              return (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="info">
                    <h3>{item.name}</h3>
                    <p>Артикул: GS-{item.id.toString().padStart(8, '0')}</p>
                    <p>Вес товара: {item.weight || '70 г'}</p>
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
                  </div>
                  <div className="price-actions">
                    <p className="price">{(parsePrice(item.price) * (Number(item.quantity) || 0)).toFixed(2)} ₽</p>
                    <div className="actions">
                      <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="cart-footer">
              <button className="clear-cart" onClick={clearCart}>
                Очистить корзину
              </button>
            </div>
          </>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="order-details">
          <h3>Детали заказа</h3>
          <p>Всего товаров: {totalItems} шт.</p>
          <p>Сумма заказа: {totalPrice.toFixed(2)} ₽</p>
          <p>Вес: {totalWeight.toFixed(2)} г</p>
          <h4>Итого: {totalPrice.toFixed(2)} ₽</h4>

          <div className="order-form">
            <h3>Оформление заказа</h3>
            <div className="form-group">
              <label htmlFor="name">Имя *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={orderDetails.name}
                onChange={handleInputChange}
                placeholder="Введите ваше имя"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Номер телефона *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={orderDetails.phone}
                onChange={handleInputChange}
                placeholder="Введите номер телефона"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Gmail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={orderDetails.email}
                onChange={handleInputChange}
                placeholder="Введите ваш email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Адрес доставки *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={orderDetails.address}
                onChange={handleInputChange}
                placeholder="Введите адрес доставки"
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Комментарий к заказу</label>
              <textarea
                id="comment"
                name="comment"
                value={orderDetails.comment}
                onChange={handleInputChange}
                placeholder="Дополнительные пожелания"
              />
            </div>
          </div>

          <button className="checkout" onClick={handleCheckout}>
            Оформить заказ
          </button>
        </div>
      )}
    </div>
  );
}

export default Corzina;