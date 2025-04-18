import React, { useEffect, useState } from "react";
import "./Header.scss";
import "../../index.css";
import call from "../../assets/svg/call.svg";
import logo from "../../assets/svg/logo.svg";
import search from "../../assets/svg/search.svg";
import heart from "../../assets/svg/heart.svg";
import cart from "../../assets/svg/cart.svg";
import { Link } from "react-router-dom";

function Header() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const newDrops = [];
    for (let i = 0; i < 1000; i++) {
      newDrops.push(
        <div
          key={i}
          className="drop"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      );
    }
    setDrops(newDrops);
  }, []);

  return (
    <header className="header  container">
    <div className="drops">{drops}</div>

      <div className="all-header wrapper">
        <div className="top-header  ">
          <div className="top-container container">
            <div className="top-header-left ">
              <ul>
                <Link to="/komponi">
                  <li>О компании</li>
                </Link>
                <Link to="/dostavka">
                  <li>Доставка и оплата</li>
                </Link>
                <Link to="/garant">
                  <li>Гарантии</li>
                </Link>
                <Link to="/kontact">
                  <li>Контакты</li>
                </Link>
              </ul>
            </div>
            <div className="top-header-right ">
              <div className="contact">
                <img src={call} alt="call" />
                <p>+7 (965) 237-44-49</p>
              </div>
              <select>
                <option value="Ru">Русский</option>
                <option value="KG">Кыргызча</option>
                <option value="En">English</option>
              </select>
              <p>Личный кабинет</p>
            </div>
          </div>
        </div>

        <div className="center-header container">
          <Link to="">
            <img src={logo} alt="Логотип" className="logo" />
          </Link>
          <div className="center-right">
            <div className="search">
              <input placeholder="Введите поисковой запрос.." type="text" />
              <button className="btn-search">
                <img src={search} alt="Поиск" />
                Найти
              </button>
            </div>
          </div>
          <div className="cart-heart">
            <div className="icon">
              <img src={heart} alt="Избранное" />
              <p>Избранное</p>
            </div>
            <div className="icon">
              <img src={cart} alt="Корзина" />
              <p>Моя корзина</p>
            </div>
          </div>
        </div>

        <div className="bottom-header container">
          <div className="selects">
            <select>
              <option value="" disabled selected>
                Apple
              </option>
              <option value="iphone-xs">iPhone XS</option>
              <option value="iphone-11-pro">iPhone 11 Pro</option>
              <option value="iphone-12">iPhone 12</option>
              <option value="iphone-13">iPhone 13</option>
              <option value="iphone-14">iPhone 14</option>
            </select>
            <select>
              <option value="" disabled selected>
                Huawei
              </option>
              <option value="huawei-p30">Huawei P30</option>
              <option value="huawei-p40">Huawei P40</option>
              <option value="huawei-mate-30">Huawei Mate 30</option>
              <option value="huawei-mate-40">Huawei Mate 40</option>
            </select>
            <select>
              <option value="" disabled selected>
                Xiaomi
              </option>
              <option value="xiaomi-mi-11">Xiaomi Mi 11</option>
              <option value="xiaomi-redmi-note-10">Xiaomi Redmi Note 10</option>
              <option value="xiaomi-poco-x3">Xiaomi Poco X3</option>
              <option value="xiaomi-mi-10">Xiaomi Mi 10</option>
            </select>
            <select>
              <option value="" disabled selected>
                Samsung
              </option>
              <option value="galaxy-s20">Samsung Galaxy S20</option>
              <option value="galaxy-s21">Samsung Galaxy S21</option>
              <option value="galaxy-note-20">Samsung Galaxy Note 20</option>
              <option value="galaxy-z-fold">Samsung Galaxy Z Fold</option>
            </select>
          </div>
          <div className="uls">
            <ul>
              <li>Питание и кабели</li>
              <li>Powerbank</li>
              <li>Акции</li>
              <li>Прайс-лист</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;