import React from 'react'
import { Link } from 'react-router-dom'
import '../ClaimSubMenu/ClaimFiled.css'

const ClaimFiled = () => {

  return (
    <div className='claim-filed-page'>
        <h2>Claimed Filed</h2>
        <br/>
        <p>Your submission for the insurance policy proposal has been received and duly processed.</p>
        <br/> 
        <p>"The proposal is presently undergoing thorough review for approval. Upon successful completion of background verification, you will receive further instructions to proceed with payment for the policy."
        </p>
        <br/>
        <p>Click here to track the policy</p>
        <br/>
        <Link to='/track-claim' className='btn light-btn'>Track Claim</Link>
    </div>
  )
}

export default ClaimFiled