import React from 'react';
import "./Footer.scss";
import logofoot from "../../assets/svg/logofoot.svg"
import visaa from "../../assets/svg/visa.svg"
import massaa from "../../assets/svg/mass.svg"
import mirlogoo from "../../assets/svg/mirlogo.svg"
import bumerang from "../../assets/svg/bumerang.svg"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer wrapper">
      <div className="conta">
        <div className="footer-top">
          <div className="logo">
            <h2>NO DOORS TECHNOLOGY</h2>
            <img src={logofoot} alt="Логотип" />
          </div>

          <div className="footer-links">
            <h3>НАВИГАЦИЯ</h3>
            <ul>
              <li><Link to="/komponi">О компании</Link></li>
              <li><Link to="/dostavka">Доставка и оплата</Link></li>
              <li><Link to="/garant">Гарантия</Link></li>
              <li><Link to="/kontact">Контакты</Link></li>
            </ul>
          </div>

          <div className="footer-contacts">
            <h3>КОНТАКТЫ</h3>
            <p>📞 +7 (965) 237-44-49</p>
            <p>🔗 <a href="https://vk.com/long_line" target="_blank" rel="noopener noreferrer">vk.com/long_line</a></p>
            <p>📧 @long_nickname</p>
          </div>

          <div className="footer-payment">
            <h3>СПОСОБЫ ОПЛАТЫ</h3>
            <div className="payment-icons">
              <img src={visaa} alt="Visa" />
              <img src={massaa} alt="MasterCard" />
              <img src={mirlogoo} alt="МИР" />
            </div>
          </div>

          <div className="footer-dev">
            <h3>РАЗРАБОТКА САЙТА</h3>
            <img src={bumerang} alt="Логотип разработчика" />
            <a href="#">Политика конфиденциальности</a>
            <p>No Doors Technology © 2020</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
