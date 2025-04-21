import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../axios/apiClient';
import "./Madel.scss";
import AnimatedLayout from './Animation';
import { motion } from 'framer-motion';

function Madel() {
  const { brand } = useParams();  // URL параметри
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get("/tecnology")
      .then(res => {
        const filteredPhones = res.data.filter(phone => phone.brandId.toString() === brand.toLowerCase());
        setPhones(filteredPhones);
        setLoading(false);
      })
      .catch(err => {
        console.error("Ошибка при загрузке данных:", err);
        setError("Ошибка загрузки данных");
        setLoading(false);
      });
  }, [brand]);  // brand өзгөргөндө кайра жүктөлөт

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (phones.length === 0) return <p>Телефоны этого бренда не найдены</p>;

  return (
    <AnimatedLayout>
      <div className="madel container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Выберите модель
        </motion.h1>

        <div className="phones">
          {phones.map((phone, index) => (
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ flex: '0 0 23%' }}
            >
              <Link to={`/categories/${phone.id}`} className="phone-card">
                <img src={phone.image} alt={phone.name} />
                <h2>{phone.name}</h2>
                <p>{phone.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedLayout>
  );
}

export default Madel;
