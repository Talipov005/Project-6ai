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
          {/* Заголовок с плавным появлением */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            style={{ fontWeight: '500', fontSize: '2rem', letterSpacing: '1px' }}
          >
            Выберите модель
          </motion.h1>
  
          {/* Сетка телефонов с анимациями 3D */}
          <div className="phones" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
            {phones.map((phone, index) => (
              <motion.div
                key={phone.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut",
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
                  perspective: '1200px', // Для 3D эффекта
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                whileHover={{
                  scale: 1.1, // Увеличение карточки
                  rotateY: 10, // Поворот по оси Y для 3D
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                  transform: 'translateZ(20px)', // Приближение
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
                      transition: 'transform 0.3s ease',
                    }}
                    whileHover={{
                      transform: 'scale(1.05)', // Легкое увеличение изображения
                    }}
                  />
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.3,
                      ease: "easeOut",
                    }}
                    style={{
                      fontWeight: '500',
                      marginTop: '15px',
                      fontSize: '1.1rem',
                      color: '#333',
                      textTransform: 'uppercase',
                    }}
                  >
                    {phone.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.4,
                      ease: "easeOut",
                    }}
                    style={{
                      fontSize: '0.9rem',
                      color: '#777',
                      marginTop: '5px',
                      fontWeight: '300',
                      letterSpacing: '0.5px',
                    }}
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
