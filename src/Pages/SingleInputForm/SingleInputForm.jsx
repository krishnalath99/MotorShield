import React from 'react'
import './SingleInputForm.css'

const SingleInputForm = ({onFormSubmit, heading, value, handleInputChange, messages, buttonName}) => {
  return (
    <div className='input-page'>
      <form className="input-form" onSubmit={onFormSubmit}>
        <h2>{heading}</h2>
        <input 
          type="text"
          id="vehicle_number"
          name="vehicle_number"
          placeholder="Enter Vehicle Number"
          value={value}
          onChange={handleInputChange}
          required
        />
        {messages && <p className="disp-error">{messages}</p>}
        <button type="submit" className='btn light-btn'>{buttonName}</button>
      </form>
    </div>
  )
}

SingleInputForm.defaultProps = {
  messages: ''
};

export default SingleInputForm
// Reused in the Following Components:
// TrackClaim.jsx
// TrackPolicy.jsx
// RenewPolicy.jsx