import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ForgotPassword.css'
import { useNavigate } from 'react-router-dom'

const ForgorPassword = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")){
        navigate('/menu')
      }
  },[])
  
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/send-reset-password-email/', {
            email
        });
        setError('Password Reset link sent to your mail.')
    }
    catch(error) {
        setError('You are not a Registered User')
    }
  }

  return (
    <div className="fp-cont">
        <div className="fp-container">
            <form className='fp-form' onSubmit={submitHandler}>
                <h2>Forgot Password</h2>
                <input type="email" id="email" name="email" placeholder='Enter Your Email' required value={email} onChange={(event) => setEmail(event.target.value)}/>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className='btn light-btn'>Get Password Reset Link on Mail</button>
            </form>
        </div>
    </div>
  )
}

export default ForgorPassword