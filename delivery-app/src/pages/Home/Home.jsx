import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/ExploreMenu/Exploremenu'
import Fooddisplay from '../../components/FoodDisplay/Fooddisplay'
import Appdown from '../../components/Appdown/Appdown'

const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
     <Header/>
     <Exploremenu category={category} setCategory={setCategory}/>
     <Fooddisplay category={category}/>
     <Appdown/>
    </div>
  )
}

export default Home
