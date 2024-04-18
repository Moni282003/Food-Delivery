import React, { useContext, useState } from 'react';
import './Cart.css';
import { Storecontext } from '../../context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Cart = ({text}) => {
  const { food_list, cartitems, setCartItem, removeCart, getTotalCartAmout} = useContext(Storecontext);
  const deliveryFee = (getTotalCartAmout() * 0.1).toFixed(2);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [appliedPromoCode, setAppliedPromoCode] = useState('');
  const navigate=useNavigate();
  const applyPromoCode = () => {
    if (code === "Moni123") {
      setAppliedPromoCode(code);
      setDiscount(10); 
    }
  };

  const removePromoCode = () => {
    setAppliedPromoCode('');
    setDiscount(0);
  };

  const calculateTotal = () => {
    const totalAmount = Number(getTotalCartAmout()) + Number(deliveryFee);
    return (totalAmount - discount).toFixed(2);
  };

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br /><hr />
        {food_list.map((item) => {
          if (cartitems[item._id] > 0) {
            return (
              <div className="cart-item-title cart-items-item" key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartitems[item._id]}</p>
                <p>${item.price * cartitems[item._id]}</p>
                <p className='X' onClick={() => { removeCart(item._id) }}>X</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmout()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            {appliedPromoCode && (
              <div className="cart-total-details">
                <p>Promo Code ({appliedPromoCode})</p>
                <p>-${discount}</p>
              </div>
            )}
            <div className="cart-total-details">
              <p>Total</p>
              <p>${calculateTotal()}</p>
            </div>
          </div> <div className="Promo-remove">
              <button onClick={()=>(calculateTotal()>0?(text=="Sign Up"?alert("Please Login"):navigate('/order')):1)}>Proceed To Add Address</button>
          {appliedPromoCode && (
              <button onClick={removePromoCode}>Remove Promo Code</button>
          )} </div>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo Code' value={code} onChange={(e) => setCode(e.target.value)} />
              <button onClick={applyPromoCode}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
