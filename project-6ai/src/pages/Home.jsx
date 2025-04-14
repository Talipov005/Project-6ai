import React, { useEffect, useState } from 'react'
import API from '../axios/apiClient'
import "./Home.scss"
import { Link } from 'react-router-dom'
import Banner from '../components/banner/Banner'
import Popular from '../components/popular/Popular'
import Card from '../components/besh-card/card'
import Text from '../components/text/Text'
import Foto from '../components/pngfoto/Foto'
import AnimatedLayout from './Animation'

function Home() {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    API.get("/disert")
      .then(res => setBrands(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
      <AnimatedLayout>
    <div>
<Banner />
      <div className='brend container'>
        <h1>Выберите бренд</h1>
        <div className='cards'>
          {brands.map((brand) => (
            <div key={brand.id} className="card-item">
              <Link to={`/model/${brand.id}`}>
                <img src={brand.image} alt={brand.name} />
              </Link>
              <div className="brand-name">{brand.name}</div>
            </div>
          ))}
        </div>
      </div>
      <Popular />
      <Card />
      <Text />
      <Foto />
    </div>
          </AnimatedLayout>
  )
}

export default Home
