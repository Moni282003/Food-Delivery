import React, { useContext, useState } from 'react'
import './navbar.css'
import logo from'../assets/logo.png'
import search from '../assets/search_icon.png'
import basket from '../assets/basket_icon.png'
import { Link } from 'react-router-dom'
import { Storecontext } from '../context/Storecontext'
const Navbar = ({setShowLogin,text,setText}) => {
  const {getTotalCartAmout}=useContext(Storecontext);
   const [menu,setMenu]=useState('home')
  const logout=()=>{
    setText("Sign Up")
    alert("Logged Out")
  }

  return (
    <div className='navbar'>
    <Link to='/'>  <img src={logo}/></Link>
      <ul className='navbar-menu'>
        <Link onClick={()=>{setMenu("home")}} className={menu==='home'?"active":""} >Home</Link>
        <a href="#Explore-menu" onClick={()=>{setMenu("menu")}}className={menu==='menu'?"active":""}>Menu</a>
        <a href="#app-down"onClick={()=>{setMenu("mobile-app")}} className={menu==='mobile-app'?"active":""}>Mobile-APP</a>
        <a href="#app-down" onClick={()=>{setMenu("contact-us")}} className={menu==='contact-us'?"active":""}>Contact-Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={search}/>
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={basket}/></Link>
            {getTotalCartAmout()==0?
             <></>
             : <div className='dot'>

             </div>
            }
           
        </div>
        <button onClick={()=>{text=="Sign Up"?setShowLogin(true) : logout()
        }}>{text}</button>
      </div>
    </div>
  )
}

export default Navbar
