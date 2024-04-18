import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quae magni voluptate pariatur provident exercitationem, veritatis accusamus laborum ipsum at voluptatibus quasi deleniti, ullam expedita distinctio. Unde voluptatum atque quia.</p>
        <div className="footer-social-icon">
            <img src={assets.facebook_icon}/>
            <img src={assets.linkedin_icon}/>
            <img src={assets.twitter_icon}/>
        </div>
        </div>

        <div className="footer-content-center">
             <h2>COMPANY</h2>
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
             </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <li>+91 93423147456</li>
            <li>Vit@gmail.com</li>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default Footer
