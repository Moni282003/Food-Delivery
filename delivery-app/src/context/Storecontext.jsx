import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const Storecontext=createContext(null)
const StorecontextProvider=(props)=>{
  const [cartitems,setCartItem]=useState({})
  const addToCart=(itemId)=>{
     if(!cartitems[itemId])
     {
      setCartItem((prev)=>({...prev,[itemId]:1}))
     }
     else{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
     }
  }
  const removeCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  const getTotalCartAmout=()=>{
    let totalAmout=0;
    for(const item in cartitems){
    if(cartitems[item]>0)
  {
let itemInfo=food_list.find((product)=>product._id===item);
totalAmout+=itemInfo.price*cartitems[item];
  }}
  return totalAmout
  }
 
  const contextValue={
     food_list,cartitems,setCartItem,addToCart,removeCart,getTotalCartAmout
  } 

  return(
    <Storecontext.Provider value={contextValue}>
        {props.children}
    </Storecontext.Provider>
  )
}
export default StorecontextProvider;