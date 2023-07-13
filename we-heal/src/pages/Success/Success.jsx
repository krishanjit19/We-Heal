import React from 'react';
import './Success.scss';
import Payment from '../../img/payment.gif';

const Success = () => {
  return (
    <div className="success">
        <h1>Your <span>payment successful.</span> Thank you!</h1>
        <img src={Payment} alt='payment' className='payment'/>
        <p>Thank you for choosing us. Go to my tests to get your test results and other updates.</p>
    </div>
  )
}

export default Success