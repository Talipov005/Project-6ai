import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Izbrannyi.scss';
import { useFavorites } from '../contexts/FavoritesContext';
import { useCart } from '../contexts/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function Izbrannyi() {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [addedItems, setAddedItems] = useState({});

  // Helper function to parse price and ensure it's a valid number
  const parsePrice = (price) => {
    if (!price) return 0;
    const cleanedPrice = String(price).replace(/[^\d.]/g, '');
    return parseFloat(cleanedPrice) || 0;
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      setQuantities((prev) => ({ ...prev, [itemId]: newQuantity }));
    }
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    if (quantity > 0) {
      addToCart({ ...item, quantity });
      setAddedItems((prev) => ({ ...prev, [item.id]: true }));
      setQuantities((prev) => ({ ...prev, [item.id]: 1 })); // Reset quantity
      setTimeout(() => {
        setAddedItems((prev) => ({ ...prev, [item.id]: false }));
      }, 2000);
    }
  };

  return (
    <div className="favorites-container">
      <h2>Избранное</h2>
      {favorites.length === 0 ? (
        <p className="empty">Избранное пусто</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((item) => (
            <div key={item.id} className="product-card">
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              <h3>{item.name}</h3>
              <div className="price-section">
                <p className="price">{parsePrice(item.price).toFixed(2)} ₽</p>
              </div>
              <div className="quantity-control">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 1) - 1)}
                  disabled={(quantities[item.id] || 1) <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantities[item.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Math.max(1, parseInt(e.target.value) || 1))
                  }
                />
                <button
                  type="button"
                  onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 1) + 1)}
                >
                  +
                </button>
              </div>
              <div className="action-buttons">
                <button
                  className={`add-to-cart ${addedItems[item.id] ? 'added' : ''}`}
                  onClick={() => handleAddToCart(item)}
                >
                  {addedItems[item.id] ? 'Добавлено!' : 'В корзину'}
                </button>
                <button
                  className="remove-button"
                  onClick={() => removeFromFavorites(item.id)}
                >
                  <FaRegHeart /> Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {favorites.length > 0 && (
        <button className="clear-favorites" onClick={clearFavorites}>
          Очистить избранное
        </button>
      )}
    </div>
  );
}

export default Izbrannyi;