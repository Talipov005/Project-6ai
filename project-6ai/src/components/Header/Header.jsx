import React, { useState, useEffect } from "react";
import "./Header.scss";
import "../../index.css";
import call from "../../assets/svg/call.svg";
import logo from "../../assets/svg/logo.svg";
import search from "../../assets/svg/search.svg";
import heart from "../../assets/svg/heart.svg";
import cart from "../../assets/svg/cart.svg";
import { Link, useNavigate } from "react-router-dom";
import Corzina from "../../pages/Corzina";
import ProductCard from "../Product/ProductCard"; // Импортируем карточку товара

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Состояние для корзины
  const [drops, setDrops] = useState([]);
  const [showProducts, setShowProducts] = useState(false); // Состояние для отображения товаров

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

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      // Проверка, если товар уже в корзине, увеличиваем его количество
      const existingProductIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += product.quantity;
        return updatedItems;
      } else {
        return [...prevItems, product]; // Добавляем новый товар в корзину
      }
    });
  };

  return (
    <header className="header container">
      <div className="drops">{drops}</div>

      <div className="all-header wrapper">
        <div className="top-header">
          <div className="top-container container">
            <div className="top-header-left">
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
              <Link to="/login">
                <p>Личный кабинет</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="center-header container">
          <Link to="/">
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
              <img src={heart} alt="" />
              <p>Избранное</p>
            </div>

            <div className="icon cor" onClick={() => setShowCart(true)}>
            <Link to="/corzina">
            <img src={cart} alt="" />
            </Link>
              <p>Моя корзина</p>
              <div className="corz">{cartItems.length || 0}</div>
            </div>
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
                    <p>Количество: {item.quantity}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        <div className="bottom-header container">
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

      {/* Пример отображения товаров */}
      {showProducts && (
        <div className="products-list">
          <ProductCard
            product={{
              id: 1,
              name: "Product 1",
              price: 100,
              image: "image_url",
              description: "Есть в наличии",
            }}
            addToCart={handleAddToCart}
          />
          <ProductCard
            product={{
              id: 2,
              name: "Product 2",
              price: 150,
              image: "image_url",
              description: "Есть в наличии",
            }}
            addToCart={handleAddToCart}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
