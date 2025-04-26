import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/Product/ProductCard';
import { useCart } from '../contexts/CartContext';

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`https://67f8ed49094de2fe6e9fca0b.mockapi.io/tovary?search=${searchQuery}`)
        .then((res) => {
          setSearchResults(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Ошибка при выполнении поиска:', err);
          setError('Ошибка выполнения поиска');
          setLoading(false);
        });
    }
  }, [searchQuery]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (searchResults.length === 0) return <p>Товары не найдены для данного запроса</p>;

  return (
    <div className="products container">
      <h1>Результаты поиска по запросу "{searchQuery}"</h1>
      <div className="products-list">
        {searchResults.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;