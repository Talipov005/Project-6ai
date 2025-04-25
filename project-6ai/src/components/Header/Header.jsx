import React, { useState } from 'react';
import './Header.scss';
import '../../index.css';
import call from '../../assets/svg/call.svg';
import logo from '../../assets/svg/logo.svg';
import search from '../../assets/svg/search.svg';
import heart from '../../assets/svg/heart.svg';
import cart from '../../assets/svg/cart.svg';
import { Link } from 'react-router-dom';
import ProductCard from '../Product/ProductCard';
import { useCart } from '../../contexts/CartContext';
import { useFavorites } from '../../contexts/FavoritesContext';

function Header() {
  const { cartItems, addToCart } = useCart();
  const { favorites } = useFavorites();
  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

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
              <input placeholder="Введите поисковой запрос.." type="text" />
              <button className="btn-search">
                <img src={search} alt="Поиск" />
                Найти
              </button>
            </div>
          </div>
          <div className="cart-heart">
            <div className="icon fav" onClick={() => setShowFavorites(true)}>
              <Link to="/izbrannyi">
                <img src={heart} alt="Избранное" />
              </Link>
              <p>Избранное</p>
              <div className="fav-count">{Array.isArray(favorites) ? favorites.length : 0}</div>
            </div>
            <div className="icon cor" onClick={() => setShowCart(true)}>
              <Link to="/corzina">
                <img src={cart} alt="Корзина" />
              </Link>
              <p>Моя корзина</p>
              <div className="corz">{Array.isArray(cartItems) ? cartItems.length : 0}</div>
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

        {showFavorites && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={() => setShowFavorites(false)}>Закрыть</button>
              <h2>Избранное</h2>
              {favorites.length === 0 ? (
                <p>Избранное пусто</p>
              ) : (
                favorites.map((item, i) => (
                  <div key={i} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

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

      {showProducts && (
        <div className="products-list">
          <ProductCard
            product={{
              id: 1,
              name: 'Product 1',
              price: 100,
              image: 'image_url',
              description: 'Есть в наличии',
              quantity: 1,
            }}
            addToCart={addToCart}
          />
          <ProductCard
            product={{
              id: 2,
              name: 'Product 2',
              price: 150,
              image: 'image_url',
              description: 'Есть в наличии',
              quantity: 1,
            }}
            addToCart={addToCart}
          />
        </div>
      )}
    </header>
  );
}

export default Header;