import React from 'react'
import { Link } from 'react-router-dom'
import '../ClaimSubMenu/ClaimFiled.css'

const ClaimFiled = () => {

  return (
    <div className='claim-filed-page'>
        <h2>Claimed Filed</h2>
        <br/>
        <p>Your submission for the claim against the insurance policy has been received and duly processed.</p>
        <br/> 
        <p>"The claim details are presently undergoing thorough review for approval. Upon successful verification, we will process the claim."
        </p>
        <br/>
        <p>Click here to track the claim</p>
        <br/>
        <Link to='/track-claim' className='btn light-btn'>Track Claim</Link>
    </div>
  )
}

export default ClaimFiled