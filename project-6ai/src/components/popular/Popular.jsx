import React, { useState } from "react";
import "./Popular.scss";
import popular from "../../assets/svg/popular.svg";
import bg from "../../assets/img/bg.png";


const products = [
  {
    id: 1,
    title: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
    price: 950,
    wholesalePrice: 750,
    stock: "Нет в наличии",
  },
  {
    id: 2,
    title: "iPhone X Шлейф кнопки включения + Шлейф громкости Оригинал",
    price: 1050,
    wholesalePrice: 850,
    stock: "Есть в наличии",
  },
  {
    id: 3,
    title: "iPhone 11 Pro Шлейф кнопки включения + Шлейф громкости Оригинал",
    price: 1200,
    wholesalePrice: 950,
    stock: "Нет в наличии",
  },
  {
    id: 4,
    title: "iPhone 12 Pro Max Шлейф кнопки включения + Шлейф громкости Оригинал",
    price: 1350,
    wholesalePrice: 1100,
    stock: "Есть в наличии",
  },
];

function Popular() {
  const [quantities, setQuantities] = useState({});

  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  return (
    <div className="container">
      <img className="bg container" src={bg} alt="" />
      <h1>Популярные товары</h1>

      <div className="popular">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="card-header">
              <span className="badge">Новинка</span>
              <button className="favorite">&#9825;</button>
            </div>

            <img src={popular} alt={product.title} className="product-image" />

            <h3 className="product-title">{product.title}</h3>

            <div className="price-info">
              <p>Розница: <b>{product.price} ₽</b></p>
              <p>Оптом (от 5 штук): <b>{product.wholesalePrice} ₽</b></p>
              <p className="stock">
                В наличии:
                <span className={product.stock === "Нет в наличии" ? "out-of-stock" : "in-stock"}>
                  {product.stock}
                </span>
              </p>
            </div>

            <div className="cart-actions">
              <button className="quantity-btn" onClick={() => decreaseQty(product.id)}>-</button>
              <span className="quantity">{quantities[product.id] || 0}</span>
              <button className="quantity-btn" onClick={() => increaseQty(product.id)}>+</button>
              <button className="add-to-cart">В корзину</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
