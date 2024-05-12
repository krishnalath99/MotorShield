import React, { useState } from 'react'

import './Hero.css'
import HeroHome from './HeroHome.jsx'
import SignInForm from '../SignInForm/SignInForm.jsx'

const Hero = () => {

  const [showHeroHome, setShowHeroHome] = useState(true)

  const handleButtonClick = () => { 
    setShowHeroHome(false);
  }

  return (
    <div className='hero container'>
      {showHeroHome ? <HeroHome onButtonClick={handleButtonClick} /> : <SignInForm />}
    </div>    
  )
}

export default Hero