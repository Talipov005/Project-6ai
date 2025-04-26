import React from 'react';
import './Corzina.scss';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { toast } from 'react-toastify';
import { FaHeart, FaRegHeart, FaTrash } from 'react-icons/fa';

function Corzina() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalWeight = cartItems.reduce((sum, item) => sum + (item.weight ? parseFloat(item.weight) : 0) * item.quantity, 0);

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
    } else {
      toast.success('Заказ успешно оформлен! Спасибо за покупку.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      clearCart(); // Очищаем корзину после оформления
    }
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
                    <p className="price">{item.price * item.quantity} ₽</p>
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
              <button className="select-all">Выбрать всё</button>
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
          <p>Сумма заказа: {totalPrice} ₽</p>
          <p>Вес: {totalWeight || 140} г</p>
          <h4>Итого: {totalPrice} ₽</h4>
          <button className="checkout" onClick={handleCheckout}>
           Оформить заказ 
          </button>
        </div>
      )}
    </div>
  );
}

export default Corzina;