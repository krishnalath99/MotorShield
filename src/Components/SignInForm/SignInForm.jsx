import React from 'react'
import './SignInForm.css'

const SignInForm = () => {
  return (
    <div className='cont'>
      <form className="signin-form">
        <h2>Sign In</h2>
        <input type="text" id="username" name="username" placeholder='Enter Your Username'required/>
        <input type="password" id="password" name="password" placeholder='Enter Your Password' required/>
        <button type="submit" className='btn light-btn'>Sign In</button>
    </form>
    <p className="signup-link">Don't have an account? <a href="#">Sign Up</a></p>
    </div>
  )
}

export default SignInForm