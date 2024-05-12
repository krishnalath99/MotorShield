import React from 'react'

import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const HeroHome = ({onButtonClick}) => {
  return (
      <div className="hero-text">
        <h1>Driving Confidence, Securing Your Every Mile.</h1>
        <p>Our commitment to excellence drives every aspect of our service, ensuring your satisfaction and peace of mind at Motor Shield.</p>
        <button className='btn' onClick={onButtonClick}>Get Quotes<img src={dark_arrow} alt="" /></button>
      </div>
  )
}

export default HeroHome