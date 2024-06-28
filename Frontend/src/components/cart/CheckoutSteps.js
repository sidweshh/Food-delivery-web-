import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({delivery, confirmOrder, payment}) => {
  return (
    <div className='checkout-progress d-flex justify-content-center mt-5'>
      {delivery ? (
        //If delivery is true, then create a link to the "delivery" route with active style
        <Link to="shipping" className='float-right'>
            <div className='triangle2-active'></div>
            <div className='step active-step'>Address</div>
            <div className='triangle-active'></div>
        </Link>
      ) : (
        //If delivery is false, then create a link to the "delivery" route with inactive style
        <Link to="#!" disabled>
            <div className='triangle2-incomplete'></div>
            <div className='step incomplete'>Address</div>
            <div className='triangle-incomplete'></div>
        </Link>
      )}
      {/* Confirm order */}
      {confirmOrder ? (
        //If delivery is true, then create a link to the "delivery" route with active style
        <Link to="/order/confirm" className='float-right'>
            <div className='triangle2-active'></div>
            <div className='step active-step'>Confirm Order</div>
            <div className='triangle-active'></div>
        </Link>
      ) : (
        //If delivery is false, then create a link to the "delivery" route with inactive style
        <Link to="#!" disabled>
            <div className='triangle2-incomplete'></div>
            <div className='step incomplete'>Confirm Order</div>
            <div className='triangle-incomplete'></div>
        </Link>
      )}
      {/* PAYMENT */}
      {payment ? (
        //If delivery is true, then create a link to the "delivery" route with active style
        <Link to="/payment" className='float-right'>
            <div className='triangle2-active'></div>
            <div className='step active-step'>Payment</div>
            <div className='triangle-active'></div>
        </Link>
      ) : (
        //If delivery is false, then create a link to the "delivery" route with inactive style
        <Link to="#!" disabled>
            <div className='triangle2-incomplete'></div>
            <div className='step incomplete'>Payment</div>
            <div className='triangle-incomplete'></div>
        </Link>
      )}
    </div>
  )
}

export default CheckoutSteps
