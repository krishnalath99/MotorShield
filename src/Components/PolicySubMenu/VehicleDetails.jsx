import React, {useState} from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom';
import './VehicleDetails.css';
import axios from 'axios';

const VehicleDetails = () => {
  const [vehicle_type, setVehicleType] = useState('');
  const [vehicle_number, setVehicleNumber] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [fuel_type, setFuelType] = useState('');
  const [registration_date, setRegistrationDate] = useState('');
  const [seats, setSeats] = useState(1);
  const [purchase_price, setPurchasePrice] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let token = localStorage.getItem("token")
    console.log(token)
    try {
        const response = await axios.post('http://127.0.0.1:8000/add-vehicle/', {
            vehicle_type,
            vehicle_number,
            make,
            model,
            fuel_type,
            registration_date,
            seats,
            purchase_price},
          {headers:{
            Authorization: token ? `Bearer ${token}` : null
          }});
        console.log('Vehicle Added:', response.data);
      }
      catch(error) {
        // setError('Error')
        console.log(error)
      }
    }  
  return (
    <div className='new-form'>
      <form className="vehicle-form" onSubmit={handleSubmit}>
        <h2>Vehicle Details</h2>
        <label htmlFor="vehicle_type">Vehicle Type:</label>
        <select id="vehicle_type" name="vehicle_type" value={vehicle_type} onChange={(event) => setVehicleType(event.target.value)} required>
          <option value="">Select...</option>
          <option value="Two Wheeler">Two wheeler</option>
          <option value="Four Wheeler">Four wheeler</option>
          <option value="Commercial Vehicle">Commercial vehicle</option>
        </select>
        <label htmlFor="vehicle_number">Vehicle Number:</label>
        <input type="text" id="vehicle_number" name="vehicle_number" value={vehicle_number} onChange={(event) => setVehicleNumber(event.target.value)} required />
        <label htmlFor="make">Make:</label>
        <input type="text" id="make" name="make" value={make} onChange={(event) => setMake(event.target.value)} required />
        <label htmlFor="model">Model:</label>
        <input type="text" id="model" name="model" value={model} onChange={(event) => setModel(event.target.value)} required />
        <label htmlFor="fuel_type">Fuel Type:</label>
        <select id="fuel_type" name="fuel_type" value={fuel_type} onChange={(event) => setFuelType(event.target.value)} required>
          <option value="">Select...</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
        <label htmlFor="registration_date">Registration Date:</label>
        <input type="date" id="registration_date" name="registration_date" value={registration_date} onChange={(event) => setRegistrationDate(event.target.value)} required />
        <label htmlFor="seats">Number of Seats:</label>
        <input type="number" id="seats" name="seats" min="1" value={seats} onChange={(event) => setSeats(event.target.value)} required />
        <label htmlFor="purchase_price">Purchase Price:</label>
        <input type="number" id="purchase_price" name="purchase_price" value={purchase_price} onChange={(event) => setPurchasePrice(event.target.value)} required />
        <button type="submit" className='btn primary-btn'>Submit</button>
      </form>
    </div>
  )
}

export default VehicleDetails