import React from 'react'
import {  FaHandPointDown } from 'react-icons/fa';
import './Hero.css'
function Hero() {
  return (
    <>
    <div className='headpage'>
    <div className='hello'>
  <h2>New Arrivals Only</h2>
  <h2 className='handicon'>  <FaHandPointDown/></h2>
  <button className='arrival-btn'><h2>Get the latest Arrivals </h2></button>
    </div>

    <div className='img'>
        <img src='https://img.freepik.com/free-vector/pop-art-girl-holding-shopping-bags_88138-217.jpg' alt='img'/>
    </div>
    </div>
    </>
  )
}

export default Hero