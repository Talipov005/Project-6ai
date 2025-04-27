import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './Detail.scss';

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some((item) => item.id === product?.id);

  // Helper function to parse price and ensure it's a valid number
  const parsePrice = (price) => {
    if (!price) return 0;
    // Convert to string, remove non-numeric characters except decimal point
    const cleanedPrice = String(price).replace(/[^\d.]/g, '');
    return parseFloat(cleanedPrice) || 0;
  };

  useEffect(() => {
    axios
      .get(`https://67f8ed49094de2fe6e9fca0b.mockapi.io/tovary/${id}`)
      .then((res) => {
        const rawPrice = parsePrice(res.data.price);
        setProduct({
          id: res.data.id,
          name: res.data.name,
          price: rawPrice,
          image: res.data.image,
          description: res.data.description || 'Есть в наличии',
          quantity: res.data.quantity || 1,
          label: res.data.label || '',
          weight: res.data.weight || '66 г',
          country: res.data.country || 'Китай',
          discountPrice: parsePrice(res.data.discountPrice) || rawPrice * 0.9,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка при загрузке товара:', err);
        setError('Ошибка загрузки товара');
        setLoading(false);
      });
  }, [id]);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: 1 }); // Default quantity of 1
      setIsAdded(true); // Change button to "Добавлено!"
      // Reset to "Добавить в корзину" after 2 seconds
      // setTimeout(() => setIsAdded(false), 2000);
    }
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Товар не найден</p>;

  return (
    <div className="detail-page">
      <div className="detail container">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
          {product.label && (
            <span className={`product-label ${product.label.toLowerCase()}`}>
              {product.label}
            </span>
          )}
        </div>
        <div className="detail-info">
          <h1>{product.name}</h1>
          <div className="price-section">
            <span className="price">{product.discountPrice.toFixed(2)} ₽</span>
            <span className="original-price">{product.price.toFixed(2)} ₽</span>
          </div>
          <div className="characteristics">
            <p>Вес: {product.weight}</p>
            <p>Страна-производитель: {product.country}</p>
            <p>Аксессуары для мобильных устройств</p>
            <p>Аккумуляторные батареи, элементы питания</p>
            <p>АКБ для мобильных устройств</p>
            <p>АКБ для сотовых телефонов</p>
          </div>
          <p className="description">{product.description}</p>
          <div className="action-row">
            <button
              className={`add-to-cart ${isAdded ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {isAdded ? 'Добавлено!' : 'Добавить в корзину'}
            </button>
            <button
              className={`favorite-text-button ${isFavorite ? 'active' : ''}`}
              onClick={handleFavoriteToggle}
            >
              {isFavorite ? (
                <>
                  <FaHeart /> Удалить из избранного
                </>
              ) : (
                <>
                  <FaRegHeart /> Добавить в избранное
                </>
              )}
            </button>
          </div>
          <p className="availability">
            Доставка и наличие: всегда в наличии. Товары в Ростове-на-Дону и Краснодаре.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;