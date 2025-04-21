// Products.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductCard from '../components/Product/ProductCard' // Импортируй компонент ProductCard

import './Products.scss'

function Products({ addToCart }) {
  const { id: categoryId } = useParams();
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

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>{error}</p>
  if (products.length === 0) return <p>Товары не найдены для данной категории</p>

  return (
    <div className="products container">
      <h1>Товары в категории</h1>
      <div className="products-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default Products
