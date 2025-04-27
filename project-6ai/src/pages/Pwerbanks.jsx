import React from "react";
import "../styles/Powerbanks.scss";

function Powerbanks() {
  return (
    <div className="powerbanks wrapper">
      <div className="container">
        <h1>Powerbank’и для ваших устройств</h1>
        <p>
          Ознакомьтесь с нашим ассортиментом мощных и надёжных портативных
          зарядных устройств. Высокая ёмкость, компактный дизайн и быстрая
          зарядка — всё, что нужно для вашего гаджета. Закажите с доставкой уже
          сегодня!
        </p>
        <button className="cta-button">Посмотреть каталог</button>
      </div>
    </div>
  );
}

export default Powerbanks;