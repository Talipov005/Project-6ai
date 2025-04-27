import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Powerbanks.scss";

function Powerbanks() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Пожалуйста, заполните все обязательные поля!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }
    console.log("Form submitted:", formData);
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="powerbanks wrapper">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Powerbank’и для ваших устройств</h1>
          <p className="hero-description">
            Оставайтесь на связи в любой ситуации с нашими мощными и надёжными
            портативными зарядными устройствами. Высокая ёмкость, стильный дизайн
            и быстрая зарядка — всё для вашего активного образа жизни!
          </p>
          <button className="cta-button">Узнать больше</button>
        </section>

        {/* Benefits Section */}
        <section className="benefits">
          <h2>Преимущества наших Powerbank’ов</h2>
          <div className="benefit-cards">
            <div className="benefit-card">
              <span className="card-icon">🌟</span>
              <h3>Универсальность</h3>
              <p>
                Совместимы с большинством устройств: смартфоны, планшеты,
                наушники и даже ноутбуки.
              </p>
            </div>
            <div className="benefit-card">
              <span className="card-icon">🎒</span>
              <h3>Портативность</h3>
              <p>
                Компактные и лёгкие модели, которые легко помещаются в карман или
                сумку.
              </p>
            </div>
            <div className="benefit-card">
              <span className="card-icon">🔒</span>
              <h3>Безопасность</h3>
              <p>
                Встроенные системы защиты от перегрева, перезаряда и короткого
                замыкания.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>Почему выбирают наши Powerbank’и?</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <span className="card-icon">🔋</span>
              <h3>Высокая ёмкость</h3>
              <p>
                Заряжайте устройства несколько раз без необходимости подзарядки
                Powerbank’а.
              </p>
            </div>
            <div className="feature-card">
              <span className="card-icon">⚡</span>
              <h3>Быстрая зарядка</h3>
              <p>
                Поддержка технологий быстрой зарядки для минимального времени
                ожидания.
              </p>
            </div>
            <div className="feature-card">
              <span className="card-icon">🛡️</span>
              <h3>Надёжность</h3>
              <p>
                Прочные корпуса и защита от перегрузки обеспечивают долгий срок
                службы.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>Что говорят наши клиенты</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Купил Powerbank для поездок, и он не подводит! Заряжает мой
                телефон несколько раз, очень удобный и лёгкий."
              </p>
              <p className="testimonial-author">— Алексей, Москва</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Отличное качество! Быстрая зарядка и стильный дизайн. Теперь
                всегда беру с собой в путешествия."
              </p>
              <p className="testimonial-author">— Мария, Санкт-Петербург</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Надёжный Powerbank, который спасает в долгих поездках. Спасибо за
                быструю доставку!"
              </p>
              <p className="testimonial-author">— Дмитрий, Екатеринбург</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form">
          <h2>Оставьте заявку на консультацию</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Иван Иванов"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Номер телефона</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Ваш вопрос</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Какой Powerbank подойдёт для iPhone 14?"
                rows="4"
              />
            </div>
            <button type="submit" className="cta-button">
              Отправить заявку
            </button>
          </form>
        </section>

        {/* FAQ Section */}
        <section className="faq">
          <h2>Часто задаваемые вопросы</h2>
          <div className="faq-item">
            <h3>Какой Powerbank выбрать для моего устройства?</h3>
            <p>
              Мы рекомендуем Powerbank’и от 10000mAh для смартфонов и от 20000mAh
              для планшетов или нескольких устройств.
            </p>
          </div>
          <div className="faq-item">
            <h3>Есть ли гарантия на Powerbank’и?</h3>
            <p>
              Да, на все наши Powerbank’и предоставляется гарантия 12 месяцев.
            </p>
          </div>
          <div className="faq-item">
            <h3>Как долго длится доставка?</h3>
            <p>
              Доставка по России занимает 2-7 дней в зависимости от региона.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Powerbanks;