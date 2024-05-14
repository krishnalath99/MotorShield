import React, { useEffect } from 'react'
import './Menu.css'
import { Link, redirect, useNavigate } from 'react-router-dom'

const Menu = () => {


  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")){
        navigate('/')
      }
  },[])
  

  return (
    <div className="card-menu">
      <Link to='/policy-menu' className="card">Buy Insurance Policy</Link>
      <Link to='/claim-menu' className="card">Claim Insurance Policy</Link>
    </div>
  )
}

export default Menu