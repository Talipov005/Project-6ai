import React from 'react';
import './Mastera.scss';

function Mastera() {
  const masters = [
    {
      name: 'Алексей Иванов',
      role: 'Старший техник',
      description: 'Специалист с 10-летним стажем, эксперт по ремонту смартфонов и планшетов.',
      image: 'https://avatars.mds.yandex.net/get-altay/9822373/2a00000191eb3f15fe294e2a254f261babd0/XXXL',
    },
    {
      name: 'Марина Смирнова',
      role: 'Мастер по замене экранов',
      description: 'Быстро и качественно заменит экран вашего устройства.',
      image: 'https://avatars.mds.yandex.net/get-altay/5195020/2a00000181869ae6bb3b5485d21aa28602d2/XXXL',
    },
    {
      name: 'Дмитрий Кузнецов',
      role: 'Специалист по аккумуляторам',
      description: 'Профессионально заменит аккумулятор на вашем устройстве.',
      image: 'https://t3.ftcdn.net/jpg/04/44/11/36/360_F_444113693_PuCN7VZCarEYGWoExSmaGVyeZxkLLJi2.jpg',
    },
    {
      name: 'Елена Петрова',
      role: 'Диагност',
      description: 'Точный и быстрый анализ неисправностей вашего устройства.',
      image: 'https://sun9-56.userapi.com/impf/dZYaVOZtGuU_OZYsKgxb4DWZ6uw-YtdMd8Vewg/T1_NNowMK84.jpg?size=600x355&quality=95&sign=9000ff7822abff18d657a25bcae70c82&type=album',
    },
    {
      name: 'Иван Сидоров',
      role: 'Мастер по ремонту ноутбуков',
      description: 'Ремонт ноутбуков любой сложности.',
      image: 'https://10.img.avito.st/image/1/1.QYGEZbaD7WjqzQ1iigAK45TE7246zjdh0M7vajzY7WIQyteiM8Y.HCkpZl4nvLPnJ8wltUlo4YZzTnBuXenF51ZPbDwKqFM',
    },
    {
      name: 'Ольга Васильева',
      role: 'Специалист по восстановлению данных',
      description: 'Восстановление данных с повреждённых устройств.',
      image: 'https://avatars.mds.yandex.net/get-shedevrum/14348358/img_4800b6e49ea411ef81fb463786c64669/orig',
    },
  ];

  return (
    <div className="masters container">
      <section className="masters-welcome">
        <h1 className="masters-welcome-title">Добро пожаловать в наш сервисный центр!</h1>
        <p className="masters-welcome-description">
          Мы гордимся своими мастерами, которые обеспечивают быстрое и качественное обслуживание ваших устройств.
        </p>
      </section>

      <section className="masters-list">
        <h2 className="masters-list-title">Наши мастера</h2>
        <div className="masters-grid">
          {masters.map((master, index) => (
            <div key={index} className="master-card">
              <img src={master.image} alt={master.name} className="master-image" />
              <h3 className="master-name">{master.name}</h3>
              <p className="master-role">{master.role}</p>
              <p className="master-description">{master.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Mastera;