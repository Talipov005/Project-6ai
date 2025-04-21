import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Category.scss'

function Categories() {
  const { phoneId } = useParams()
  const navigate = useNavigate()

  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!phoneId) {
      setError("ID телефона не найден")
      setLoading(false)
      return
    }

    axios.get("https://67f8ed49094de2fe6e9fca0b.mockapi.io/products")
      .then(res => {
        const filtered = res.data.filter(item => item.phoneId?.toString() === phoneId.toString())
        setCategories(filtered)
        setLoading(false)
      })
      .catch(err => {
        console.error("Ошибка при загрузке категорий:", err)
        setError("Ошибка загрузки данных")
        setLoading(false)
      })
  }, [phoneId])

  const handleCategoryClick = (categoryId) => {
    navigate(`/products/${categoryId}`)
  }


  if (loading) return <p>Загрузка...</p>

  if (error) return <p>{error}</p>
  if (categories.length === 0) return 

  return (
    <div className="category container">
      <h1>Категории по выбранной модели</h1>
      <div className="categories">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => handleCategoryClick(cat.id)}
          >
            <img src={cat.img} alt={cat.name} />
            <h2>{cat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
