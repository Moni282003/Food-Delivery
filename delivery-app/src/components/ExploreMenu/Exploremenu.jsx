import React from 'react';
import './Exploremenu.css';
import { menu_list } from '../../assets/assets';

const Exploremenu = ({ category, setCategory }) => {
  return (
    <div className='Explore-menu' id="Explore-menu">
      <h1>EXPLORE OUR MENU</h1>
      <p className='Explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, minima incidunt? Dolor ea numquam maiores deleniti veritatis a minus fugit, incidunt nam unde quos quia nobis aut. Aliquid, quae perspiciatis.</p>
      <div className="Explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="Explore-menu-list-item">
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
