import React from 'react'
import "./Home.scss"
import Banner from '../components/banner/Banner'
import Popular from '../components/popular/Popular'
import card1 from "../assets/svg/card 01.svg"
import card2 from "../assets/svg/card 02.svg"
import card3 from "../assets/svg/card 03.svg"
import card4 from "../assets/svg/card 04.svg"


function Home() {
  return (
    <div>
      <Banner/>
      <div className='brend container'>
        <h1>Выберите бренд</h1>
        <div className='cards'>
          <div>
          <img src={card1} alt="" />
          </div>
          <div>
          <img src={card2} alt="" />
          </div>
          <div>
          <img src={card3} alt="" />
        </div>
        <div>
          <img src={card4} alt="" />
       </div>
        </div>
      </div>
      <Popular/>
    </div>
  )
}

export default Home
