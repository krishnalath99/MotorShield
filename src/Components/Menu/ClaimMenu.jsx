import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const ClaimMenu = () => {
  return (
    <div className="card-menu">
      <Link className="card">File for a Claim</Link>
      <Link className="card">Track Your Claim</Link>
    </div>
  )
}

export default ClaimMenu