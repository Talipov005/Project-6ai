import React from 'react'
import "./Foto.scss"
import video2 from "../../../public/IMG_0468.MP4"

function Foto() {
  return (
    <div className='video container'>
      <video src={video2} 
      autoPlay
      muted
      loop
      playsInline></video>
    </div>
  )
}

export default Foto
