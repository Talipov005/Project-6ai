import React, { useState, useEffect } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    window.googleTranslateInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'ru', 
          includedLanguages: 'ru,ky,en,de', 
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

   
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
     
      document.body.removeChild(script);
    };
  }, []);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header wrapper">
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
                <img src={call} alt="Телефон" />
                <p>+7 (965) 237-44-49</p>
              </div>
             
              <div id="google_translate_element"></div>
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
                onKeyDown={handleKeyDown}
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
          <button className="burger-menu" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
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

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <button className="mobile-menu-close" onClick={toggleMobileMenu}>
            ✕
          </button>
          <ul className="mobile-nav">
            <li>
              <Link to="/komponi" onClick={toggleMobileMenu}>О компании</Link>
            </li>
            <li>
              <Link to="/dostavka" onClick={toggleMobileMenu}>Доставка и оплата</Link>
            </li>
            <li>
              <Link to="/garant" onClick={toggleMobileMenu}>Гарантии</Link>
            </li>
            <li>
              <Link to="/kontact" onClick={toggleMobileMenu}>Контакты</Link>
            </li>
            <li>
              <Link to="/mastera" onClick={toggleMobileMenu}>Наши мастера</Link>
            </li>
            <li>
              <Link to="/proses" onClick={toggleMobileMenu}>Процесс ремонта</Link>
            </li>
            <li>
              <Link to="/rabota" onClick={toggleMobileMenu}>Наши работы</Link>
            </li>
            <li>
              <Link to="/sovet" onClick={toggleMobileMenu}>Советы</Link>
            </li>
            <li>
              <Link to="/login" onClick={toggleMobileMenu}>Личный кабинет</Link>
            </li>
          </ul>
          <div className="mobile-contact">
            <img src={call} alt="Телефон" />
            <p>+7 (965) 237-44-49</p>
          </div>
          <div id="google_translate_element_mobile" className="mobile-language"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;