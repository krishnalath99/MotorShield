import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentCompleted.css'

const PaymentCompleted = () => {
    return (
        <div className='proposal-message-page'>
            <div className="proposal-message">
            <h2>Payment has been completed</h2>
            <br/>
                <p>The policy has been activated and the further details related to it have been sent to your registered email.</p>
                <br/> 
            <Link to='/' className='btn light-btn'>Return to Dashboard</Link>
            </div>
        </div>
    );
}
export default PaymentCompleted;