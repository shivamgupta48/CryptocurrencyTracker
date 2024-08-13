import React from 'react'
import './HomePage.css'
import Carousel from '../components/Carousel'
import CoinsTable from '../components/CoinsTable'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Carousel/>
      <CoinsTable/>
    </div>
  )
}

export default HomePage
