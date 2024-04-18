import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/placeorder/Placeorder';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

const App = () => {

  const [showLogin,setShowLogin]=useState(false);
  const [text,setText]=useState("Sign Up")
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin} text={text} setText={setText} ></Login>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} text={text} setText={setText}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart text={text}/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
     <Footer/> 
    </>
  );
}

export default App;
