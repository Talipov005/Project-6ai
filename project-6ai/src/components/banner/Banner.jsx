import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.scss";

const slides = [
  {
    title: "Профессиональный ремонт телефонов",
    description:
      "Наши опытные мастера быстро и качественно восстановят ваш смартфон. Замена экрана, аккумулятора, микросхем — всё на высшем уровне с гарантией.",
    image: "http://localhost:5173/src/assets/img/%D0%91%D0%BB%D0%BE%D0%BA%20_%D0%A4%D0%BE%D1%82%D0%BE%20%D0%B8%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE_.png",
    link: "/remont" // Ссылка на страницу ремонта
  },
  {
    title: "Надежные Powerbank'и для любого устройства",
    description:
      "У нас вы найдете качественные и ёмкие портативные зарядки. Быстрая доставка, гарантия и доступные цены на все модели!",
    image: "https://static.nv.ua/shared/system/Article/posters/002/760/068/original/34a928d1452ab9d98dcad6f006000fd1.jpg?q=85&stamp=20231014113400&w=600",
    link: "/powerbanki" // Ссылка на страницу Powerbank'ов
  },
  {
    title: "Сотни довольных клиентов",
    description:
      "Читайте реальные отзывы и убедитесь в качестве наших услуг. Наша миссия — делать ремонт простым и надёжным.",
    image: "https://static.tildacdn.com/tild3935-6439-4764-a331-653364373030/__2024-06-19__204000.png",
    link: "/otzyvy" // Ссылка на страницу отзывов
  },
  {
    title: "Наши мастера",
    description:
      "Познакомьтесь с нашими профессиональными мастерами. Каждый из них имеет многолетний опыт и сертификаты для качественного ремонта.",
    image: "https://via.placeholder.com/1300x500.png?text=Наши+Мастера",
    link: "/mastera" // Ссылка на страницу мастеров
  },
  {
    title: "Процесс ремонта",
    description:
      "Каждый ремонт проходит через несколько этапов: диагностика, устранение проблем, тестирование. Мы гарантируем качество на каждом шаге.",
    image: "https://via.placeholder.com/1300x500.png?text=Процесс+Ремонта",
    link: "/process" // Ссылка на страницу процесса
  },
  {
    title: "Наши работы",
    description:
      "Посмотрите на наши успешные проекты: до и после ремонта, и убедитесь в высоком качестве наших услуг.",
    image: "https://via.placeholder.com/1300x500.png?text=Наши+Работы",
    link: "/raboty" // Ссылка на страницу работ
  }
];

function Banner() {
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="banner-overlay">
                <div className="banner-content container">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <Link to={slide.link}>
                    <button className="banner-btn">Узнать больше</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
