import React from 'react'
import "./Banner.scss"
import Carousel from 'react-bootstrap/Carousel';
import iphone from "../../assets/img/cards_main.png"
import iphone2 from "../../assets/img/Frame 560.png"

function Banner() {
  return (
    <div className='banner'>
        <div className='carousel'>
        <Carousel>
      <Carousel.Item>
        <img src={iphone} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={iphone2} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={iphone} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={iphone2} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      
    </div>
  )
}

export default Banner
