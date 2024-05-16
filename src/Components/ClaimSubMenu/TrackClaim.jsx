import React, { useState } from 'react'
import './TrackClaim.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const TrackClaim = () => {

  const [vehicleNumber, setVehicleNumber] = useState('')
  const [err, setErr] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    let token = localStorage.getItem("token")
    try {
      const response = await axios.get(`http://127.0.0.1:8000/claims/${vehicleNumber}/`, {
        headers:{
            Authorization: token ? `Bearer ${token}` : null
        }
      });
      navigate('/claim-status', {
        state: {
            claim_id: response.data.id,
            date_of_claim: response.data.date_of_claim,
            reason_for_claim: response.data.reason_for_claim,
            claim_status: response.data.claim_status,
        }
      })
    }
    catch(error) {
        setErr(`No Claim raised for Vehicle - ${vehicleNumber}`)
        console.log(error)
    }
  }
  return (
    <div className='track-claim-page'>
      <form className="track-claim-form" onSubmit={handleSubmit}>
        <h2>Track/View Your Claim</h2>
        <input type="text" id="vehicle_number" name="vehicle_number" placeholder="Enter Vehicle Number" value={vehicleNumber} onChange={(event) => setVehicleNumber(event.target.value)} required />
        {err && <p className="claim-error">{err}</p>}
        <button type="submit" className='btn light-btn'>Next</button>
      </form>
    </div>
  )
}

export default TrackClaim