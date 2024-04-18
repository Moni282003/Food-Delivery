import React from 'react'
import './Placeorder.css'
import { useNavigate } from 'react-router-dom'
const Placeorder = () => {
  const navigate=useNavigate()
  return (
   <form className="place-order">
    <div className="place-order-left">
      <p className='title'>Deliver Information</p>
      <div className="multi-field">
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>
      </div>
      <div className="multi-field">
      <input type='text' placeholder='Email Address'/>
      <input type='text' placeholder='Street'/></div>
      <div className="multi-field">
        <input type='text' placeholder='City'/>
        <input type='text' placeholder='State'/>
      </div>
      <div className="multi-field">
        <input type='text' placeholder='Zip code'/>
        <input type='text' placeholder='Country'/>
      </div>
      <input type='text' placeholder='phone'/><br></br>
      <button onClick={()=>{alert("Your Order Is Placed")
       navigate('/')}}>
       Place Order</button>
    </div>
    
    <div className="place-order-right">
     
    </div>
   </form>
  )
}

export default Placeorder
