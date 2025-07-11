import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div className='center p-2'>Welcome to my Portfolio</div>
    <div className='flex flex-center p-2'>
      <h3 className='main-links'>
        <Link to='/projects'>Projects</Link>
      </h3>
      <h3 className='main-links'>
        <Link to='/contact'>Contact</Link>
      </h3>
    </div>
    </>
  )
}

export default Home