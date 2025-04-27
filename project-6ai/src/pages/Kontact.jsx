import React from "react";
import "./Kontact.scss";
import icon from "../assets/svg/icon.svg";
import icon2 from "../assets/svg/icon2.svg";
import icon3 from "../assets/svg/icon3.svg";
import icon4 from "../assets/svg/icon4.svg";
import AnimatedLayout from "./Animation";

function Kontact() {
  return (
    <AnimatedLayout>
      <div className="kontact container">
        <div className="kontact-breadcrumb">Главная / Контакты</div>
        <h1>Контакты</h1>
        <div className="kontact-info">
          <div className="kontact-details">
            <div className="kontact-item">
              <img src={icon} alt="Телефон" />
              <span>+996-995-56-56-32</span>
            </div>
            <div className="kontact-item">
              <img src={icon2} alt="Адрес" />
              <span>г. Бишкек, ул. Абдымомунова 109/1</span>
            </div>
            <div className="kontact-item">
              <img src={icon3} alt="Социальные сети" />
              <span>vk.com/long_link_name</span>
              <span>instagram.com/long_ling_name</span>
            </div>
            <div className="kontact-item">
              <img src={icon4} alt="Информация о компании" />
              <span>
                ООО "No Doors Technology"
                <br />
                ИНН: 3123386455
                <br />
                ОГРН: 1163123062222
                <br />
                КПП: 312301001
              </span>
            </div>
          </div>
          <div className="kontact-map">
            <div className="map-frame">
              <iframe
                title="bishkek-philharmonic-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.0080509826964!2d74.60009997658994!3d42.87714397115019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8b79b54e3e5%3A0xbec48e5bbf74cc02!2z0JHQsNC30LDRgNC60LjQuSDQv9C10YDQstC10YDQvdC40Lkg0KXQvdGC0L7QstCw0YDQug!5e0!3m2!1sru!2skg!4v1713690710831!5m2!1sru!2skg"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
}

export default Kontact;