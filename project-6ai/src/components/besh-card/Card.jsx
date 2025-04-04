import React from 'react'
import "./Card.scss"
import card1 from "../../assets/svg/ca1.svg"
import card2 from "../../assets/svg/ca2.svg"
import card3 from "../../assets/svg/ca3.svg"
import card4 from "../../assets/svg/ca4.svg"
import card5 from "../../assets/svg/ca5.svg"

function Card() {
  return (
    <div>
      <div className='caard container'>
        <img src={card1} alt="" />
        <img src={card2} alt="" />
        <img src={card3} alt="" />
        <img src={card4} alt="" />
        <img src={card5} alt="" />
      </div>
    </div>
  )
}

export default Card
