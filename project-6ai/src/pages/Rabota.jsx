import React from 'react';
import './Rabota.scss';
import razbit from "../assets/img/razbit.png";
import ekran from "../assets/img/ekran22.jpg";
import chistkado from "../assets/img/chistkado.jpeg";
import chistkaposle from "../assets/img/chistkaposle.jpg";
import battareado from "../assets/img/battareado.webp";
import battareaposle from "../assets/img/battareaposle.jpg";

function Rabota() {
  const works = [
    {
      before: razbit, 
      after: ekran,  
      title: 'Разбитый экран iPhone 11',
      desc: 'Полная замена экрана с сохранением чувствительности и яркости.',
    },
    {
      before: chistkado, 
      after: chistkaposle,  
      title: 'Чистка от пыли и грязи',
      desc: 'Устройство снова заряжается стабильно после чистки порта.',
    },
    {
      before: battareado, 
      after: battareaposle,  
      title: 'Замена вздутого аккумулятора',
      desc: 'Новый аккумулятор безопасен и держит заряд как новый.',
    },
  ];

  return (
    <div className="rabota-page container">
      <section className="welcome">
        <h1>Наши работы</h1>
        <p>Посмотрите, как мы преображаем устройства наших клиентов. Быстро, качественно и с гарантией!</p>
      </section>

      <section className="works-gallery">
        {works.map((work, index) => (
          <div className="work-card" key={index}>
            <h3>{work.title}</h3>
            <div className="images">
              <div className="image-block">
                <img src={work.before} alt="До" />
                <span>До</span>
              </div>
              <div className="image-block">
                <img src={work.after} alt="После" />
                <span>После</span>
              </div>
            </div>
            <p className="description">{work.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Rabota;