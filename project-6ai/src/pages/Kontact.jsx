import React from "react";
import "./Kontact.scss";
import icon from "../assets/svg/icon.svg"
import icon2 from "../assets/svg/icon2.svg"
import icon3 from "../assets/svg/icon3.svg"
import icon4 from "../assets/svg/icon4.svg"
import karta from "../assets/img/map.png"
import AnimatedLayout from "./Animation";

function Kontact() {
  return (
    <AnimatedLayout>
<div className="kontact-container container">
            <div className="kompani-wrapper__breadcrumb">Главная / О контакты</div>
      <h1>Контакты</h1>
      <div className="kontact-info">
        <div className="kontact-details">
          <div className="kontact-item">
            <img src={icon} alt="phone" />
            <span>+7 (965) 237-44-49</span>
          </div>
          <div className="kontact-item">
            <img src={icon2} alt="location" />
            <span>г. Воронеж, ул. Плехановская, д. 18</span>
          </div>
          <div className="kontact-item">
            <img src={icon3} alt="vk" />
            <span>vk.com/long_link_name</span>
            <span>instagram.com/long_ling_name</span>
          </div>
          <div className="kontact-item">
            <img src={icon4} alt="info" />
            <span>
              ООО "No Doors Technology"<br />
              ИНН: 3123386455<br />
              ОГРН: 1163123062222<br />
              КПП: 312301001
            </span>
          </div>
        </div>
        <div className="kontact-map">
          <img src={karta} alt="Map" />
        </div>
      </div>
    </div>
    </AnimatedLayout>
  );
}

export default Kontact;
