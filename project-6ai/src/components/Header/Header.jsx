import React, { useEffect, useState } from "react";
import "./Header.scss";
import "../../index.css";
import call from "../../assets/svg/call.svg";
import logo from "../../assets/svg/logo.svg";
import search from "../../assets/svg/search.svg";
import heart from "../../assets/svg/heart.svg";
import cart from "../../assets/svg/cart.svg";
import { Link, useNavigate } from "react-router-dom";

import Modal from "../Modal";
import './CartModal.scss'

function Header({ cartItems, setCartItems })  {
  const [showCart, setShowCart] = useState(false)
  const [isCartOpen, setCartOpen] = useState(false)
  const [isFavOpen, setFavOpen] = useState(false)
  const [drops, setDrops] = useState([]);
  

  const navigate = useNavigate();

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

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(`/model/${value}`);
    }
  };

  return (
    <header className="header container">
      <div className="drops">{drops}</div>


      <div className="all-header wrapper">
        <div className="top-header">
          <div className="top-container container">
            <div className="top-header-left">
              <ul>
                <Link to="/komponi"><li>О компании</li></Link>
                <Link to="/dostavka"><li>Доставка и оплата</li></Link>
                <Link to="/garant"><li>Гарантии</li></Link>
                <Link to="/kontact"><li>Контакты</li></Link>
              </ul>
            </div>
            <div className="top-header-right">
              <div className="contact">
                <img src={call} alt="call" />
                <p>+7 (965) 237-44-49</p>
              </div>
              <select>
                <option value="Ru">Русский</option>
                <option value="KG">Кыргызча</option>
                <option value="En">English</option>
              </select>
              <Link to="/login"><p>Личный кабинет</p></Link>
            </div>
          </div>
        </div>

        <div className="center-header container">
          <Link to="/"><img src={logo} alt="Логотип" className="logo" /></Link>
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
              <img src={heart} alt="" />
              <p>Избранное</p>
            </div>

          <div className="icon cor" onClick={() => setShowCart(true)}>
          <img src={cart} alt="Корзина" />
          <p>Моя корзина</p>
          <div className="corz">{cartItems?.length || 0}</div>
          </div>
      </div>

      {showCart && (
  <div className="modal">
    <div className="modal-content">
      <button onClick={() => setShowCart(false)}>Закрыть</button>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        cartItems.map((item, i) => (
          <div key={i} className="cart-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>

          </div>
        ))
      )}
    </div>
  </div>
)}


      {/* Модальное окно корзины */}
      <Modal isOpen={isCartOpen} onClose={() => setCartOpen(false)} title="Корзина">
        <p>Здесь будут товары из корзины</p>
      </Modal>

      {/* Модальное окно избранного */}
      <Modal isOpen={isFavOpen} onClose={() => setFavOpen(false)} title="Избранное">
        <p>Здесь будут избранные товары</p>
      </Modal>
        </div>

        {showCart && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={() => setShowCart(false)}>Закрыть</button>
              <h2>Корзина</h2>
              {cartItems.length === 0 ? (
                <p>Корзина пуста</p>
              ) : (
                cartItems.map((item, i) => (
                  <div key={i} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Модалки */}
        <Modal isOpen={isCartOpen} onClose={() => setCartOpen(false)} title="Корзина">
          <p>Здесь будут товары из корзины</p>
        </Modal>

        <Modal isOpen={isFavOpen} onClose={() => setFavOpen(false)} title="Избранное">
          <p>Здесь будут избранные товары</p>
        </Modal>

        <div className="bottom-header container">
          <div className="selects">
            <select onChange={handleSelect} defaultValue="">
              <option value="" disabled>Apple</option>
              <option value="iphone 14 Pro">iPhone 14 Pro</option>
              <option value="iphone-13-pro">iPhone 13 Pro</option>
              <option value="iphone-12">iPhone 12</option>
              <option value="iphone-13">iPhone 13</option>
              <option value="iphone-14">iPhone 14</option>
            </select>

            <select onChange={handleSelect} defaultValue="">
              <option value="" disabled>Huawei</option>
              <option value="huawei-p60-pro">Huawei P60 Pro</option>
              <option value="huawei-mate-50-pro">Huawei Mate 50 Pro</option>
              <option value="huawei-nova-11">Huawei Nova 11</option>
              <option value="huawei-p50">Huawei P50</option>
            </select>

            <select onChange={handleSelect} defaultValue="">
              <option value="" disabled>Xiaomi</option>
              <option value="xiaomi-14-ultra">Xiaomi 14 Ultra</option>
              <option value="xiaomi-14">Xiaomi 14</option>
              <option value="xiaomi-13t-pro">Xiaomi 13T Pro</option>
              <option value="xiaomi-13t">Xiaomi 13T</option>
            </select>

            <select onChange={handleSelect} defaultValue="">
              <option value="" disabled>Samsung</option>
              <option value="samsung-a05">Samsung Galaxy A05</option>
              <option value="samsung-a15">Samsung Galaxy A15</option>
              <option value="samsung-a25">Samsung Galaxy A25 5G</option>
              <option value="samsung-a35">Samsung Galaxy A35 5G</option>
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
