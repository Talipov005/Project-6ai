import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './Products.scss'

function Products({ addToCart }) {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get("https://67f8ed49094de2fe6e9fca0b.mockapi.io/tovary")
      .then(res => {
        const filteredProducts = res.data.filter(item => item.categoryId === categoryId)
        setProducts(filteredProducts)
        setLoading(false)
      })
      .catch(err => {
        console.error("Ошибка при загрузке товаров:", err)
        setError("Ошибка загрузки товаров")
        setLoading(false)
      })
  }, [categoryId])

  if (loading) return 
  if (error) return <p>{error}</p>
  if (products.length === 0) return <p>Товары не найдены для данной категории</p>


  return (
    <div className="products container">
      <h1>Товары в категории</h1>
      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Добавить в корзину
            </button>
          </div>

        ))}
      </div>
    </div>
  )
}


function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const increase = () => setQuantity(q => q + 1)
  const decrease = () => setQuantity(q => (q > 1 ? q - 1 : 1))
  const handleAdd = () => {
    addToCart({ ...product, quantity })
    setQuantity(1)
  }

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev)
  }

  return (
    <div className="product-card">
      {/* Метка статуса */}
      {product.status && (
        <span className={`product-label ${product.status}`}>{product.status}</span>
      )}

      {/* Кнопка избранного */}
        <button className="favorite-button" onClick={toggleFavorite}>
          {isFavorite ? '♥' : '♡'}
        </button>

      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="description">{product.description}</p>
      <p className="price">{product.price}</p>

      <div className="action-row">
        <div className="quantity-control horizontal">
          <button onClick={decrease}>−</button>
          <input
            type="number"
            value={quantity}
            onChange={e => setQuantity(Math.max(1, +e.target.value))}
            min="1"
          />
          <button onClick={increase}>+</button>
        </div>

        <button className="add-to-cart" onClick={handleAdd}>
          Добавить в корзину
        </button>
      </div>
    </div>
  )
}


export default Products
