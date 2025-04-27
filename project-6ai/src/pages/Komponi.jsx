import React from 'react';
import './Komponi.scss';
import Card from '../components/besh-card/card';
import AnimatedLayout from './Animation';

function Komponi() {
  return (
    <AnimatedLayout>
      <div className="kompani container">
        <div className="kompani-breadcrumb">Главная / О компании</div>
        <h2 className="kompani-title">
          О компании <br /> No Doors Technology
        </h2>

        <div className="kompani-content">
          <div className="kompani-text">
            <p>
              Разнообразный и богатый опыт консультация с широким активом требуют
              определения и уточнения соответствующих условий активизации.
            </p>
            <p>
              Разнообразный и богатый опыт постоянное
              информационно-пропагандистское обеспечение нашей деятельности
              позволяет оценить значение системы обучения кадров, соответствует
              насущным потребностям.
            </p>
            <p>
              Равным образом рамки и место обучения кадров представляет собой
              интересный эксперимент проверки соответствующих условий
              активизации.
            </p>
            <p>
              Равным образом новая модель организационной деятельности требует
              определения и уточнения систем массового участия.
            </p>
          </div>

          <div className="kompani-image" />
        </div>
        <Card />
      </div>
    </AnimatedLayout>
  );
}

export default Komponi;