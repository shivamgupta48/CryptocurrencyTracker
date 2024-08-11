import React from 'react'
import './HomePage.css'
import Carousel from '../components/Carousel'
import Footer from  '../components/Footer'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default HomePage
