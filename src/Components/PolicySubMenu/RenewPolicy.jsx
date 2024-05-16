import React, { useState } from 'react'
import './RenewPolicy.css'
import { useNavigate } from 'react-router-dom'

const RenewPolicy = () => {
  
  const [vehicleNumber, setVehicleNumber] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/addOns-details', { state: {vehicle_number: vehicleNumber}})
  } 
  return (
    <div className='renew'>
      <form className="renew-form" onSubmit={handleSubmit}>
        <h2>Renew Insurance Policy</h2>
        <input type="text" id="vehicle_number" name="vehicle_number" placeholder="Enter the Vehicle Number" value={vehicleNumber} onChange={(event) => setVehicleNumber(event.target.value)} required />
        <button type="submit" className='btn light-btn'>Next</button>
      </form>
    </div>
  )
}

export default RenewPolicy