import React, { useEffect, useState } from 'react'
import './SignInForm.css'
import axios from "axios"
import { useNavigate } from 'react-router';
import signin_image from '../../assets/signin_image.jpg'
import { Link } from 'react-router-dom';

const SignInForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")){
        navigate('/menu')
      }
  },[])

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
      email,
      password
      });
      console.log('Login Successful:', response.data);
      localStorage.setItem("token", response.data.token.access)
      navigate('/menu')
    }
    catch (error) {
      setError('Invalid Email or Password')
      console.log('Login Error:',error)
    }
  }

  return (
    <div className='conta'>
      <div className="img-container">
        <img src={signin_image} className="signin-image"/>
      </div>
      <div className="form-container">
        <form className="signin-form" onSubmit={handleSignIn}>
          <h2>Welcome back</h2>
          <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter Your Email'required/>
          <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter Your Password' required/>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className='btn light-btn'>Sign In</button>
        </form>
        <p className="forgot-password-link"><a href="#">Forgot Password?</a></p>
        <p className="signup-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  )
}

export default SignInForm