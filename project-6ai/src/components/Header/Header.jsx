import React, { useState } from 'react';
import './Header.scss';
import '../../index.css';
import call from '../../assets/svg/call.svg';
import logo from '../../assets/svg/logo.svg';
import search from '../../assets/svg/search.svg';
import heart from '../../assets/svg/heart.svg';
import cart from '../../assets/svg/cart.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useFavorites } from '../../contexts/FavoritesContext';

function Header() {
  const { cartItems } = useCart();
  const { favorites } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="header container">
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
              <input
                placeholder="Введите поисковой запрос.."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown} // Добавлен обработчик нажатия клавиш
              />
              <button className="btn-search" onClick={handleSearch}>
                <img src={search} alt="Поиск" />
                Найти
              </button>
            </div>
          </div>
          <div className="cart-heart">
            <div className="icon fav">
              <Link to="/izbrannyi">
                <img src={heart} alt="Избранное" />
              </Link>
              <p>Избранное</p>
              <div className="fav-count">{Array.isArray(favorites) ? favorites.length : 0}</div>
            </div>
            <div className="icon cor">
              <Link to="/corzina">
                <img src={cart} alt="Корзина" />
              </Link>
              <p>Моя корзина</p>
              <div className="corz">{Array.isArray(cartItems) ? cartItems.length : 0}</div>
            </div>
          </div>
        </div>

        <div className="bottom-header container">
          <div className="uls">
            <ul>
              <Link to="/mastera">
                <li>Наши мастера</li>
              </Link>
              <Link to="/proses">
                <li>Процесс ремонта</li>
              </Link>
              <Link to="/rabota">
                <li>Наши работы</li>
              </Link>
              <Link to="/sovet">
                <li>Советы</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
