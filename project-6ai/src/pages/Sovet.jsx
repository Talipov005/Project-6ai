import React from 'react';
import './Sovet.scss';
import { FaTools, FaShieldAlt, FaBatteryHalf } from 'react-icons/fa';
import garant from "../assets/img/garant.png"
import orig from "../assets/img/orig.jpeg"
import batter from "../assets/img/batter.png"

function Sovet() {
  const tips = [
    {
      icon: <FaTools />,
      title: 'Проверяй гарантию',
      description: 'Перед ремонтом убедись, что твой телефон не на гарантии — возможно, производитель починит его бесплатно. Мы всегда помогаем проверить это клиентам.',
      img: garant
    },
    {
      icon: <FaShieldAlt />,
      title: 'Ставь оригинальные детали',
      description: 'Мы используем только проверенные детали — это продлевает жизнь телефону и сохраняет его работоспособность. Оригинал — значит надёжно.',
      img: orig
    },
    {
      icon: <FaBatteryHalf />,
      title: 'Не тяни с заменой батареи',
      description: 'Если батарея стала быстро садиться — лучше заменить её сразу. Старая может вздуться и повредить другие компоненты.',
      img: batter
    },
  ];

  return (
    <div className="sovet-page container">
      <h1 className="title">Добро пожаловать в наш сервис 💙</h1>
      <p className="intro">
        Мы не просто ремонтируем телефоны — мы помогаем им жить дольше. Ниже собрали полезные советы, которые помогут тебе избежать дорогостоящего ремонта и продлить жизнь своему гаджету.
      </p>

      <h2 className="tips-title">💡 Советы по уходу и ремонту</h2>
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <div className="tip-icon">{tip.icon}</div>
            <img src={tip.img} alt={tip.title} className="tip-img" />
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>

      <div className="conclusion">
        <h3>🤝 Мы всегда рядом</h3>
        <p>Если у тебя возникли вопросы — просто напиши нам. Консультация бесплатна. А ещё у нас всегда приятный кофе 😊</p>
      </div>
    </div>
  );
}

export default Sovet;
