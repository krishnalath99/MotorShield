import React from 'react'

import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const HeroHome = () => {

  const { state } = useAuth();

  return (
      <div className="hero-text">
        <h1>Driving Confidence, Securing Your Every Mile.</h1>
        <p>Our commitment to excellence drives every aspect of our service, ensuring your satisfaction and peace of mind at Motor Shield.</p>
        {!state.isAuthenticated && <Link className='btn' to="/login">SignIn to Get Quotes<img src={dark_arrow} alt="" /></Link>}
      </div>
  )
}

export default HeroHome