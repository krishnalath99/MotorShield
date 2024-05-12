import React from 'react'

import './Services.css'
import bike from '../../assets/bike.jpg'
import car from '../../assets/car.jpg'
import truck from '../../assets/truck.jpg'
import bike_icon from "../../assets/bike_icon.png"
import car_icon from "../../assets/car_icon.png"
import truck_icon from "../../assets/truck_icon.png"

const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={bike} alt="" />
            <div className="caption">
                <img src={bike_icon} alt="" />
                <p>Two Wheeler</p>
                <p>Insurance</p>
            </div>
        </div>
        <div className="service">
            <img src={car} alt="" />
            <div className="caption">
                <img src={car_icon} alt="" />
                <p>Four Wheeler</p>
                <p>Insurance</p>
            </div>
        </div>
        <div className="service">
            <img src={truck} alt="" />
            <div className="caption">
                <img src={truck_icon} alt="" />
                <p>Commercial Vehicle</p>
                <p>Insurance</p>
            </div>
        </div>
    </div>
  )
}

export default Services