import React from 'react';
import './Proses.scss';
import video from "../assets/IMG_0448.MP4";
import { FaMobileAlt, FaBatteryFull, FaClock } from "react-icons/fa";

function Proses() {
  return (
    <div className="wrapper">
      
      <div className="marquee-banner container">
        <p>💡 Бесплатная диагностика • 🔧 Профессиональный ремонт • ⏱️ Быстрое выполнение • ✅ Гарантия на работы</p>
      </div>

    
      <section className="intro-banner container">
        <h2 className="banner-title">Добро пожаловать в наш сервисный центр!</h2>
        <p className="banner-subtitle">Ваше устройство — в надёжных руках. Мы ценим ваше время и качество ремонта.</p>

        <div className="info-cards">
          <div className="info-card">
            <FaMobileAlt className="icon" />
            <h4>Замена дисплея</h4>
            <p>Обычно занимает 1–2 часа, в зависимости от модели.</p>
          </div>
          <div className="info-card">
            <FaBatteryFull className="icon" />
            <h4>Замена аккумулятора</h4>
            <p>До 1 часа — быстро и качественно.</p>
          </div>
          <div className="info-card">
            <FaClock className="icon" />
            <h4>Экспресс-диагностика</h4>
            <p>Бесплатно в течение 15 минут.</p>
          </div>
        </div>
      </section>

     
      <div className="video-container container">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="video-player"
        />
        <div className="content-overlay">
          <h1 className="title">Процесс Ремонта</h1>
          <p className="description">
            Мы предлагаем качественный ремонт устройств. Посмотрите, как проходит процесс —
            от диагностики до восстановления. Профессионально. Быстро. Надежно.
          </p>
        </div>
      </div>

     
      <section className="why-choose container">
        <h2>Почему выбирают нас?</h2>
        <div className="reasons">
          <div className="reason-card">
            <span>🛠️</span>
            <h4>Опытные мастера</h4>
            <p>Сертифицированные специалисты с большим опытом.</p>
          </div>
          <div className="reason-card">
            <span>⏳</span>
            <h4>Быстрый сервис</h4>
            <p>Большинство ремонтов — в течение 1 дня.</p>
          </div>
          <div className="reason-card">
            <span>🔒</span>
            <h4>Гарантия качества</h4>
            <p>Мы даём гарантию на все выполненные работы.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Proses;
