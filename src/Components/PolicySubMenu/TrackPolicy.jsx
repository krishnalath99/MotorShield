import React, { useState } from 'react'
import './TrackPolicy.css'
import axios from 'axios'
import { useNavigate } from 'react-router'

const TrackPolicy = () => {

  const [vehicleNumber, setVehicleNumber] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    let token = localStorage.getItem("token")
    try {
      const response = await axios.get(`http://127.0.0.1:8000/policies/${vehicleNumber}/`, {
        headers:{
            Authorization: token ? `Bearer ${token}` : null
        }
      });
      navigate('/policy-status', {
        state: {
            policy_id: response.data.id,
            policy_number: response.data.policy_number,
            vehicle_number: vehicleNumber,
            policy_status: response.data.policy_status,
            total_premium: response.data.total_premium
        }
      })
    }
    catch(error) {
        setError(`No Policy found for Vehicle - ${vehicleNumber}`)
    }
  }
  return (
    <div className='track-policy-page'>
      <form className="track-policy-form" onSubmit={handleSubmit}>
        <h2>Track/Pay for Policy</h2>
        <input type="text" id="vehicle_number" name="vehicle_number" placeholder="Enter Vehicle Number" value={vehicleNumber} onChange={(event) => setVehicleNumber(event.target.value)} required />
        {error && <p className="policy-error">{error}</p>}
        <button type="submit" className='btn light-btn'>Submit</button>
      </form>
    </div>
  )
}

export default TrackPolicy