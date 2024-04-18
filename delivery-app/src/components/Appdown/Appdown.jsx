import React from 'react'
import './Appdown.css'
import { assets } from '../../assets/assets'
const Appdown = () => {
  return (
    <div className='app-download' id="app-down">
        <p>For better Experience Download <br></br>TOMATO APP</p>
        <div className="app-download-platforms">
            <img src={assets.play_store}/>
            <img src={assets.app_store}/>
        </div>
    </div>
  )
}

export default Appdown
