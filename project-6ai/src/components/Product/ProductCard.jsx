import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Prodact.scss';
import { useFavorites } from '../../contexts/FavoritesContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function ProductCard({ product, addToCart }) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavoriteToggle = () => {
    isFavorite ? removeFromFavorites(product.id) : addToFavorites(product);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
      setIsAdded(true); // Hide button and show confirmation
      setQuantity(1); // Reset quantity after adding to cart
    }
  };

  return (
    <div className="product-card">
      {product.label && (
        <span className={`product-label ${product.label.toLowerCase()}`}>
          {product.label}
        </span>
      )}

      <button
        className={`favorite-button ${isFavorite ? 'active' : ''}`}
        onClick={handleFavoriteToggle}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>

      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <h2>{product.name}</h2>

      <div className="price-section">
        <p className="retail-price">Розничная: {product.price} ₽</p>
        <p className="wholesale-price">
          Оптом (от 5 штук): {product.wholesalePrice || Math.round(product.price * 0.8)} ₽
        </p>
      </div>

      <p className="availability">В наличии: {product.quantity || 2536} шт.</p>

      <div className="action-row">
        <div className="quantity-control">
          <button
            type="button"
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => handleQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
          />

          <button
            type="button"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            +
          </button>
        </div>

        {isAdded ? (
          <span className="added-message">Добавлено!</span>
        ) : (
          <button className="add-to-cart" onClick={handleAddToCart}>
            В корзину
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;