import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const PolicyMenu = () => {
  return (
    <div className="card-menu">
      <Link to='/add-vehicle' className="card">Purchase Policy - Get Quotes</Link>
      <Link className="card">Renew Insurance Policy</Link>
      <Link className="card">Track/View Policy</Link>
      <Link className="card">Make Payment for Policy</Link>
    </div>
  )
}

export default PolicyMenu