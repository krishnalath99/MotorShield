import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  

  return (
    <div className="card-menu">
      <Link to='/policy-menu' className="card">Buy Insurance Policy</Link>
      <Link to='/claim-menu' className="card">Claim Insurance Policy</Link>
    </div>
  )
}

export default Menu