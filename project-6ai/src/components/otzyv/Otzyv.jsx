import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import './Otzyv.scss';

function Otzyv() {
  const scrollRef = useRef(null);
  const [reviews, setReviews] = useState([
    { name: 'Александр', date: '15.01.2025', rating: 5, text: 'Заказал экран для iPhone 12, пришёл быстро, качество отличное! Установил сам, всё работает как надо. Спасибо!' },
    { name: 'Марина', date: '22.01.2025', rating: 4, text: 'Брала аккумулятор для Samsung Galaxy S20. Доставка заняла 3 дня, но батарея держит отлично. Рекомендую!' },
    { name: 'Иван', date: '30.01.2025', rating: 5, text: 'Покупал шлейф для Xiaomi Redmi Note 10. Всё подошло идеально, телефон снова работает. Отличный магазин!' },
    { name: 'Екатерина', date: '05.02.2025', rating: 5, text: 'Заказывала стекло на Huawei P30. Пришло целое, с установкой проблем не было. Спасибо за быструю доставку!' },
    { name: 'Дмитрий', date: '12.02.2025', rating: 4, text: 'Взял динамик для iPhone 11. Звук стал как новый, но доставка немного задержалась. В целом доволен.' },
    { name: 'Ольга', date: '18.02.2025', rating: 5, text: 'Меняла камеру на Samsung A52. Качество запчасти отличное, фото снова чёткие. Спасибо за помощь в выборе!' },
    { name: 'Сергей', date: '25.02.2025', rating: 5, text: 'Заказал разъём зарядки для Xiaomi Mi 11. Всё подошло, зарядка работает без проблем. Молодцы!' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', phone: '', email: '', text: '', rating: 0 });
  const [hoverRating, setHoverRating] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleRatingHover = (rating) => {
    setHoverRating(rating);
  };

  const handleRatingLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text || newReview.rating === 0) return;

    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;

    setReviews((prev) => [
      { name: newReview.name, date: formattedDate, rating: newReview.rating, text: newReview.text },
      ...prev,
    ]);
    setNewReview({ name: '', phone: '', email: '', text: '', rating: 0 });
    setHoverRating(0);
    setIsModalOpen(false);

    toast.success('Отзыв успешно отправлен!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="otzyv-container container">
      <div className="otzyv-header-wrapper">
        <h2 className="otzyv-title">ОТЗЫВЫ КЛИЕНТОВ</h2>
        <div className="otzyv-scroll-buttons">
          <button className="otzyv-scroll-btn otzyv-scroll-btn-left" onClick={scrollLeft}>
            {'\u2039'}
          </button>
          <button className="otzyv-scroll-btn otzyv-scroll-btn-right" onClick={scrollRight}>
            {'\u203A'}
          </button>
        </div>
      </div>
      <div className="otzyv-scroll" ref={scrollRef}>
        {reviews.map((review, index) => (
          <div key={index} className="otzyv-card">
            <div className="otzyv-header">
              <img
                src="https://еаси.екатеринбург.рф/upload/iblock/c0a/72prt04iy65nvryiz5l28uqg9cdplng9/М.png"
                alt="avatar"
                className="otzyv-avatar"
              />
              <div className="otzyv-info">
                <p className="otzyv-name">{review.name}</p>
                <p className="otzyv-date">{review.date}</p>
              </div>
              <div className="otzyv-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="otzyv-star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.5 3 1-5.5L1 7.5l5.5-.5L10 2l3.5 5 5.5.5-4 4 1 5.5z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="otzyv-text">{review.text}</p>
          </div>
        ))}
      </div>
      <div className="otzyv-button-container">
        <button className="otzyv-button" onClick={() => setIsModalOpen(true)}>
          ОСТАВИТЬ ОТЗЫВ
        </button>
      </div>

      {isModalOpen && (
        <div className="otzyv-modal">
          <div className="otzyv-modal-content">
            <h3 className="otzyv-modal-title">ОСТАВИТЬ ОТЗЫВ</h3>
            <div className="otzyv-form">
              <div className="otzyv-form-group">
                <label className="otzyv-form-label">
                  Имя <span className="otzyv-required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  className="otzyv-input"
                />
              </div>
              <div className="otzyv-form-group">
                <label className="otzyv-form-label">
                  Оценка <span className="otzyv-required">*</span>
                </label>
                <div className="otzyv-form-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`otzyv-star otzyv-star-form ${
                        star <= (hoverRating || newReview.rating) ? 'otzyv-star-filled' : ''
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => handleRatingHover(star)}
                      onMouseLeave={handleRatingLeave}
                    >
                      <path d="M10 15l-5.5 3 1-5.5L1 7.5l5.5-.5L10 2l3.5 5 5.5.5-4 4 1 5.5z" />
                    </svg>
                  ))}
                  <span className="otzyv-rating-label"></span>
                </div>
              </div>
              <div className="otzyv-form-group">
                <label className="otzyv-form-label">
                  Телефон <span className="otzyv-required">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={newReview.phone}
                  onChange={handleInputChange}
                  className="otzyv-input"
                />
              </div>
              <div className="otzyv-form-group">
                <label className="otzyv-form-label">
                  E-mail <span className="otzyv-required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={newReview.email}
                  onChange={handleInputChange}
                  className="otzyv-input"
                />
              </div>
              <div className="otzyv-form-group">
                <label className="otzyv-form-label">
                  Текст отзыва <span className="otzyv-required">*</span>
                </label>
                <textarea
                  name="text"
                  value={newReview.text}
                  onChange={handleInputChange}
                  className="otzyv-textarea"
                />
              </div>
              <p className="otzyv-consent">
                Отправляя данные через данную форму, я соглашаюсь с политикой
                конфиденциальности и даю свое согласие на обработку данных.
              </p>
              <button onClick={handleSubmit} className="otzyv-submit-button">
                ОТПРАВИТЬ
              </button>
              <button className="otzyv-modal-close" onClick={() => setIsModalOpen(false)}>
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Otzyv;