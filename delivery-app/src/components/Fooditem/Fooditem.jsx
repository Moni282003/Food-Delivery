import React, { useContext, useState } from 'react';
import './Fooditem.css';
import { assets } from '../../assets/assets';
import { Storecontext } from '../../context/Storecontext';

const Fooditem = ({ id, name, price, description, image }) => {
  const{cartitems,setCartItem,addToCart,removeCart}= useContext(Storecontext);
  return (
    <div>
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartitems[id] ? (
          <img
            className="add"
            onClick={()=>addToCart(id)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-count">
            <img src={assets.remove_icon_red} onClick={()=>removeCart(id)}/>
            <p>{cartitems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
          </div>
        )}
      </div>
      <div className="food-item info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
