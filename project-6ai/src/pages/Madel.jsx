import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../axios/apiClient';
import './Madel.scss';
import AnimatedLayout from './Animation';
import { motion } from 'framer-motion';

function Madel() {
  const { brand } = useParams();
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get('/tecnology')
      .then((res) => {
        const filteredPhones = res.data.filter(
          (phone) => phone.brandId.toString() === brand.toLowerCase()
        );
        setPhones(filteredPhones);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка при загрузке данных:', err);
        setError('Ошибка загрузки данных');
        setLoading(false);
      });
  }, [brand]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (phones.length === 0) return <p>Телефоны этого бренда не найдены</p>;

  return (
    <AnimatedLayout>
      <div className="madel container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99], // Плавная кривая Безье
          }}
          style={{ fontWeight: '500', fontSize: '2rem', letterSpacing: '1px' }}
        >
          Выберите модель
        </motion.h1>

        <div className="phones" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {phones.map((phone, index) => (
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1, // Последовательное появление
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                transition: { duration: 0.3 },
              }}
              style={{
                flex: '0 0 22%',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                overflow: 'hidden',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <Link to={`/categories/${phone.id}`} className="phone-card" style={{ color: 'inherit', textDecoration: 'none' }}>
                <motion.img
                  src={phone.image}
                  alt={phone.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                />
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                  style={{
                    fontWeight: '500',
                    marginTop: '15px',
                    fontSize: '1.1rem',
                    color: '#333',
                    textTransform: 'uppercase',
                  }}
                  whileHover={{ y: -5, color: '#28a745', transition: { duration: 0.3 } }}
                >
                  {phone.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.3,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                  style={{
                    fontSize: '0.9rem',
                    color: '#777',
                    marginTop: '5px',
                    fontWeight: '300',
                    letterSpacing: '0.5px',
                  }}
                  whileHover={{ y: -5, color: '#28a745', transition: { duration: 0.3 } }}
                >
                  {phone.description}
                </motion.p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedLayout>
  );
}

export default Madel;