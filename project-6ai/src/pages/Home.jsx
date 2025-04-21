import React, { useEffect, useState } from 'react';
import API from '../axios/apiClient';
import './Home.scss';
import { Link } from 'react-router-dom';
import Banner from '../components/banner/Banner';
import Popular from '../components/popular/Popular';
import Card from '../components/besh-card/card';
import Text from '../components/text/Text';
import Foto from '../components/pngfoto/Foto';
import AnimatedLayout from './Animation';

import iphoon from '../assets/img/iphon.jpg';
import huawei from '../assets/img/huawei.webp';
import xiomi from '../assets/img/xiomi.webp';
import samsung from '../assets/img/samsung.webp';

function Home() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get('/disert')
      .then((res) => {
        setBrands(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Ошибка загрузки данных');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <AnimatedLayout>
      <div>
        <Banner />
        <div className='brend container'>
          <h1>Выберите бренд</h1>
          <div className='cards'>
            {brands.map((brand, index) => (
              <div key={brand.id} className='card-item'>
                <Link to={`/model/${brand.id}`}>
                  <div className='image-wrapper'>
                    <img src={brand.image} alt={brand.name} className='main-image' />
                    {index === 0 && <img src={iphoon} alt="alt" className='hover-image image-1' />}
                    {index === 1 && <img src={huawei} alt="alt" className='hover-image image-2' />}
                    {index === 2 && <img src={xiomi} alt="alt" className='hover-image image-3' />}
                    {index === 3 && <img src={samsung} alt="alt" className='hover-image image-4' />}
                  </div>
                </Link>
                <div className='brand-name'>{brand.name}</div>
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
  );
}

export default Home;
