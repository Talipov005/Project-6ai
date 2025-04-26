// import React, { useState } from "react";
// import "./Popular.scss";
// import popular from "../../assets/svg/popular.svg";

// const products = [
//   {
//     id: 1,
//     title: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
//     price: 950,
//     wholesalePrice: 750,
//     stock: "Нет в наличии",
//   },
//   {
//     id: 2,
//     title: "iPhone X Шлейф кнопки включения + Шлейф громкости Оригинал",
//     price: 1050,
//     wholesalePrice: 850,
//     stock: "Есть в наличии",
//   },
//   {
//     id: 3,
//     title: "iPhone 11 Pro Шлейф кнопки включения + Шлейф громкости Оригинал",
//     price: 1200,
//     wholesalePrice: 950,
//     stock: "Нет в наличии",
//   },
//   {
//     id: 4,
//     title: "iPhone 12 Pro Max Шлейф кнопки включения + Шлейф громкости Оригинал",
//     price: 1350,
//     wholesalePrice: 1100,
//     stock: "Есть в наличии",
//   },
// ];

// function Popular() {
//   const [quantities, setQuantities] = useState({});
//   const [cartItems, setCartItems] = useState([]);

//   const increaseQty = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: (prev[id] || 0) + 1,
//     }));
//   };

//   const decreaseQty = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: Math.max((prev[id] || 0) - 1, 0),
//     }));
//   };

//   const addToCart = (product) => {
//     const quantity = quantities[product.id] || 1;

//     // Проверка на наличие уже в корзине
//     setCartItems((prevCart) => {
//       const existing = prevCart.find((item) => item.id === product.id);

//       if (existing) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity }];
//       }
//     });

//     console.log("Текущая корзина:", cartItems);
//   };

//   return (
//     <div className="container">
//       <h1>Популярные товары</h1>

//       <div className="popular">
//         {products.map((product) => (
//           <div className="card" key={product.id}>
//             <div className="card-header">
//               <span className="badge">Новинка</span>
//               <button className="favorite">&#9825;</button>
//             </div>

//             <img src={popular} alt={product.title} className="product-image" />
//             <h3 className="product-title">{product.title}</h3>

//             <div className="price-info">
//               <p>Розница: <b>{product.price} ₽</b></p>
//               <p>Оптом (от 5 шт): <b>{product.wholesalePrice} ₽</b></p>
//               <p className="stock">
//                 В наличии:
//                 <span className={product.stock === "Нет в наличии" ? "out-of-stock" : "in-stock"}>
//                   {product.stock}
//                 </span>
//               </p>
//             </div>

//             <div className="cart-actions">
//               <button className="quantity-btn" onClick={() => decreaseQty(product.id)}>-</button>
//               <span className="quantity">{quantities[product.id] || 0}</span>
//               <button className="quantity-btn" onClick={() => increaseQty(product.id)}>+</button>
//               <button
//                 className="add-to-cart"
//                 onClick={() => addToCart(product)}
//                 disabled={product.stock === "Нет в наличии"}
//               >
//                 В корзину
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Popular;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../Product/ProductCard';
import './Popular.scss';
import { useCart } from '../../contexts/CartContext';
import { useFavorites } from '../../contexts/FavoritesContext';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

function Popular() {
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();

  useEffect(() => {
    axios
      .get('https://67f8ed49094de2fe6e9fca0b.mockapi.io/tovary')
      .then((res) => {
        const shleifProducts = res.data
          .filter((item) => item.name.toLowerCase().includes('шлейф'))
          .map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            description: item.description || 'Есть в наличии',
            quantity: item.quantity || 1,
            label: item.label || '',
          }));
        setPopularProducts(shleifProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка при загрузке шлейфов:', err);
        setError('Ошибка загрузки популярных товаров');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (popularProducts.length === 0) return <p>Шлейфтер табылган жок</p>;

  return (
    <div className="popular container">
      <h1>Популярные Шлейфы</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,  // Слайдер ар 3 секунд сайын жылып турат
          disableOnInteraction: false, // Кол менен жылдырса дагы улантат
        }}
        loop={true} // Слайддын акырында кайра башына кетет
        speed={1500} // Слайдтын жылышы 1.5 секундга созулат
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="popular-swiper"
        onMouseEnter={() => { 
          // Курсор слайдердин үстүндө болгондо жылдырууну токтотобуз
          if (Swiper.autoplay) Swiper.autoplay.stop();
        }}
        onMouseLeave={() => { 
          // Курсор кетсе, слайдерди кайрадан баштайбыз
          if (Swiper.autoplay) Swiper.autoplay.start();
        }}
      >
        {popularProducts.map((product) => (
          <SwiperSlide key={product.id} className="popular-slide">
            <ProductCard
              product={product}
              addToCart={addToCart}
              addToFavorites={addToFavorites}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Popular;




