import React from 'react';
import './Prodact.scss';
import { useFavorites } from '../../contexts/FavoritesContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function ProductCard({ product, addToCart, addToFavorites }) {
  const { favorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
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
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="description">{product.description}</p>
      <p className="price">{product.price} ₽</p>
      <div className="action-row">
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default ProductCard;