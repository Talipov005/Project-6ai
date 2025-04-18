import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import API from '../axios/apiClient'
import "./Madel.scss"
import AnimatedLayout from './Animation'

function Madel() {
  const { brand } = useParams()
  const [phones, setPhones] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    API.get("/tecnology")
      .then(res => {
        const filteredPhones = res.data.filter(phone => phone.brandId.toString() === brand.toLowerCase())
        setPhones(filteredPhones)
        setLoading(false)
      })
      .catch(err => {
        console.error("Ошибка при загрузке данных:", err)
        setError("Ошибка загрузки данных")
        setLoading(false)
      })
  }, [brand])

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>{error}</p>
  if (phones.length === 0) return <p>Телефоны этого бренда не найдены</p>

  return (
    <AnimatedLayout>
      <div className="madel container">
      <h1>Выберите модель</h1>
      <div className="phones">
      {phones.map(phone => (
          <Link to={`/categories/${phone.id}`} key={phone.id} className="phone-card">
          <img src={phone.image} alt={phone.name} />
          <h2>{phone.name}</h2>
          <p>{phone.description}</p>
        </Link>
))}
      </div>
    </div>
    </AnimatedLayout>
  )
}

export default Madel
