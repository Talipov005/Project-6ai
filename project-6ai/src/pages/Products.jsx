import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/Product/ProductCard';
import './Products.scss';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

function Products() {
  const { id: categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();

  useEffect(() => {
    axios
      .get('https://67f8ed49094de2fe6e9fca0b.mockapi.io/tovary')
      .then((res) => {
        const filteredProducts = res.data
          .filter((item) => item.categoryId === categoryId)
          .map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            description: item.description || 'Есть в наличии',
            quantity: item.quantity || 1,
            label: item.label || '', 
          }));
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка при загрузке товаров:', err);
        setError('Ошибка загрузки товаров');
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (products.length === 0) return <p>Товары не найдены для данной категории</p>;

  return (
    <div className="products container">
      <h1>Товары в категории</h1>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToFavorites={addToFavorites}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;