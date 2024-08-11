import React from 'react'
import './Carousel.css'

const Carousel = () => {
    const arr1 = [1,1,1,1,1,1,2,4,1,1,1,1,1,1,1,1,1]
  return (
      <>
      <div className='carousel'>
        <h1 className='header1'>Crypto Hunter</h1>
        <div className='detail'>Get all the Info regarding your favorite Crypto Currency</div>
        <div className='images-content'> 
      {arr1.map((item ,index) => {
        return <img className='image' src='https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090' alt='coin'/>
      })}
</div>
        
      </div>
      </>
    
  )
}

export default Carousel
