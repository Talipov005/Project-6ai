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
    title: "Замена стекол!",
    description: "Быстрая и качественная замена стекол с гарантией. Ваш телефон как новый!",
    link: "/glass-replacement",
    cta: "Подробнее",
    mockups: [
      "https://lh3.googleusercontent.com/proxy/ZDCH20ZOvGp-gdi6k0onR8lNCzCD3uveb4fzMMci2X-NhvGL90u8YDAIEJCACilnNrnvxK3nQIjfLz3zNabRn6eH3XJrf9g2l3aI5jWgq_UL-KS3s_KDO-gugXhONJvZ",
      "https://eco-service.kz/wp-content/uploads/mi-mi-note-1-600x600.webp",
      "https://fixtips.ru/wp-content/uploads/2021/04/Zamena-stekla-IPhone-X-768x1024.jpg",
      
    ],
  },
  {
    title: "Мощные Powerbank’и!",
    description: "Надёжные портативные зарядки с высокой ёмкостью для ваших устройств",
    link: "/powerbanks",
    cta: "Подробнее",
    mockups: [
      "https://m.media-amazon.com/images/I/51qJiy0LWiL.jpg",
      "https://cdn11.bigcommerce.com/s-0n1ne9i/images/stencil/390x485/products/871/4942/Power_bank_wifi_1__38632.1679081633.jpg?c=2",
      "https://www.securitylab.com.au/image/cache/catalog/2024/VIM-PBANK2K/powerbank-camera-mini--550x550h.jpg"
    ],
  },
  {
    title: "Личный кабинет!",
    description: "Управляйте заказами и получайте скидки в удобном личном кабинете",
    link: "/login",
    cta: "Подробнее",
    mockups: [
          "https://web.tsu.ru/sites/default/files/register-account.png",
          "https://media.lpgenerator.ru/uploads/2016/12/14/3_thumb600x773.jpg",
          "data:image/png;base64,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"
    ],
  },
];

function Banner() {
  return (
    <div className="banner wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="banner-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="banner-slide">
              <div className="container">
                <div className="banner-content">
                  <div className="banner-text">
                    <h1 className="banner-title">{slide.title}</h1>
                    <p className="banner-description">{slide.description}</p>
                    <Link to={slide.link}>
                      <button className="banner-btn">{slide.cta}</button>
                    </Link>
                  </div>
                  <div className="banner-mockups">
                    {slide.mockups.map((mockup, idx) => (
                      <img
                        key={idx}
                        src={mockup}
                        alt={`Mockup ${idx + 1}`}
                        className={`mockup mockup-${idx + 1}`}
                      />
                    ))}
                  </div>
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