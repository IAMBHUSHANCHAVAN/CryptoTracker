import React from 'react'
import "../homepage/HomePage.css"
import Trending from './Trending'
import AllCoin from './AllCoin'
const Homepage = () => {
  return (
    <div className='container'>
  <Trending/>
  <hr className='mt-5' />
  <AllCoin/>
    </div>
  )
}

export default Homepage
