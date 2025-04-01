import React from "react";
import "./Header.scss";
import "../../index.css";
import call from "../../assets/svg/call.svg";
import logo from "../../assets/svg/logo.svg";
import search from "../../assets/svg/search.svg";
import heart from "../../assets/svg/heart.svg"
import cart from "../../assets/svg/cart.svg"

function Header() {
  return (
    <header>
      {/* Верхний блок */}
      <div className="header-top wrapper">
        <div className="nur container">
          <div className="header-top-left">
          <ul className="header-top-left">
            <li>О компании</li>
            <li>Доставка и оплата</li>
            <li>Гарантии</li>
            <li>Контакты</li>
          </ul>
          </div>
          <div className="header-top-right">
            <div className="til">
              <img src={call} alt="Иконка телефона" />
              <h4>+7 (965) 237-44-49</h4>
            </div>
            <select name="language">
              <option value="ru">Русский</option>
              <option value="kg">Кыргызча</option>
              <option value="en">English</option>
            </select>
            <p>Личный кабинет</p>
          </div>
        </div>
      </div>

      {/* Основной блок */}
      <div className="header-main container">
        <div className="header-main-top">
          <img src={logo} alt="Логотип компании" />
          
          <div className="search">
            <input type="text" placeholder="Введите поисковой запрос..." />
            <button className="btn-search">
              <img src={search} alt="Иконка поиска" />
              Найти
            </button>
          </div>

            <div className="cart-heart">
          <img src={heart} alt="Личный кабинет" />
          <img src={cart} alt="Корзина" />
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
