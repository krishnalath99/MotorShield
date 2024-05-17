import React from 'react'
import { Link } from 'react-router-dom';
import './ProposalFiled.css'

const ProposalFiled = () => {
    return (
        <div className='proposal-message-page'>
          <div className="proposal-message">
            <h2>Proposal Filed</h2>
            <br/>
              <p>Your proposal for the insurance policy has been duly submitted.</p>
              <br/> 
              <p>It is currently undergoing review for approval. Upon completion of background verification, you will be prompted to proceed with payment for the policy.
            </p>
            <br/>
            <p>Click here to track the policy</p>
            <br/>
            <Link to='/track-policy' className='btn light-btn'>Track Policy</Link>
          </div>
        </div>
      );
}

export default ProposalFiled