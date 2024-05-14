import React, { useState } from 'react'

import './Navbar.css'
import logo1 from '../../assets/logo1.png'
import menu_icon from '../../assets/menu_icon.png'

import {Link} from "react-scroll"
import { useNavigate } from 'react-router'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)

  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem("token")
    navigate('/login')
  }

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className='container'>
        <img src={logo1} className='logo' alt="" />
        <ul className={!(mobileMenu) && 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
            {localStorage.getItem("token") && <li><Link className='btn' onClick={logoutHandler}>SignOut</Link></li>}
        </ul>
        <img src={menu_icon} alt="" className='menu-icon'onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar