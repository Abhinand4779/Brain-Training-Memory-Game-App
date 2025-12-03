import React from 'react'
import Header from '../Components/Header'


const Quickpractice = () => {
  return (
    <div className='main-page'>
      <Header/>
      <div className='main-head'>
        <button>Back</button>
      </div>
      <div>
        <h2>Quick Practice</h2> <br />
        <p>Choose a game to sharpen your skills</p>
      </div>
      <div>
        <p>No streak penalty</p>
      </div>
    </div>
  )
}

export default Quickpractice
