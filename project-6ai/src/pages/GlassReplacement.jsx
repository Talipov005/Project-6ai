import React, { useState } from "react";
import "./GlassReplacement.scss";

function GlassReplacement() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    model: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    console.log("Form submitted:", formData);
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", model: "" });
  };

  return (
    <div className="glass-replacement wrapper">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Замена стекол смартфонов</h1>
          <p className="hero-description">
            Профессиональная замена стекол для любых моделей смартфонов с
            использованием оригинальных материалов. Верните своему устройству
            идеальный вид за считанные часы!
          </p>
        </section>

        {/* Service Details */}
        <section className="service-details">
          <h2>Почему выбирают нас?</h2>
          <div className="service-cards">
            <div className="service-card">
              <span className="card-icon">🔧</span>
              <h3>Качественные материалы</h3>
              <p>
                Используем только оригинальные или сертифицированные стекла,
                обеспечивающие долговечность и идеальную совместимость.
              </p>
            </div>
            <div className="service-card">
              <span className="card-icon">⚡</span>
              <h3>Быстрый ремонт</h3>
              <p>
                Большинство замен стекол выполняются в течение 1-2 часов, чтобы вы
                могли быстро вернуться к своим делам.
              </p>
            </div>
            <div className="service-card">
              <span className="card-icon">🏅</span>
              <h3>Гарантия качества</h3>
              <p>
                Предоставляем гарантию на все выполненные работы и установленные
                компоненты до 6 месяцев.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="process">
          <h2>Как мы работаем</h2>
          <div className="process-steps">
            <div className="step">
              <span className="step-number">1</span>
              <h3>Заявка</h3>
              <p>Оставьте заявку через форму или позвоните нам.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h3>Диагностика</h3>
              <p>Проводим бесплатную диагностику вашего устройства.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h3>Ремонт</h3>
              <p>Заменяем стекло с использованием профессионального оборудования.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h3>Готово!</h3>
              <p>Проверяем устройство и возвращаем его вам как новое.</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form">
          <h2>Оставьте заявку на ремонт</h2>
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
              <label htmlFor="model">Модель телефона</label>
              <input
                type="text"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                required
                placeholder="iPhone 12 Pro"
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
            <h3>Сколько времени занимает замена стекла?</h3>
            <p>
              В среднем, замена стекла занимает 1-2 часа, в зависимости от модели
              телефона и сложности работы.
            </p>
          </div>
          <div className="faq-item">
            <h3>Сохраняется ли сенсорная функциональность?</h3>
            <p>
              Да, при замене стекла мы сохраняем оригинальный дисплей и сенсор,
              если они не повреждены.
            </p>
          </div>
          <div className="faq-item">
            <h3>Какие бренды вы обслуживаете?</h3>
            <p>
              Мы работаем со всеми популярными брендами: Apple, Samsung, Xiaomi,
              Huawei и другими.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default GlassReplacement;