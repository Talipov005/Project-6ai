import React, { useState } from 'react';
import './Prodact.scss';

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [added, setAdded] = useState(false); // Состояние для отслеживания добавления товара

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAdd = () => {
    if (!added) { // Проверка, был ли товар уже добавлен
      addToCart({ ...product, quantity }); // Добавляем товар в корзину
      setAdded(true); // Обновляем статус, что товар добавлен
      setQuantity(1); // Сбрасываем количество после добавления
    }
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev); // Переключаем состояние избранного
  };

  return (
    <div className="product-card">
      {product.status && <span className={`product-label ${product.status}`}>{product.status}</span>}

      <button
        className={`favorite-button ${isFavorite ? 'favorite' : ''}`}
        onClick={toggleFavorite}
      >
        ♥
      </button>

      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p
        className={`description ${
          product.description.toLowerCase().includes('есть в наличии')
            ? 'in-stock'
            : product.description.toLowerCase().includes('нет в наличии')
            ? 'out-of-stock'
            : ''
        }`}
      >
        {product.description}
      </p>
      <p className="price">{product.price}</p>

      <div className="action-row">
        <div className="quantity-control horizontal">
          <button onClick={decrease}>−</button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, +e.target.value))} // Не даем ввести количество меньше 1
            min="1"
          />
          <button onClick={increase}>+</button>
        </div>

        <button className="add-to-cart" onClick={handleAdd} disabled={added}>
          {added ? 'Добавлено' : 'Добавить в корзину'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
