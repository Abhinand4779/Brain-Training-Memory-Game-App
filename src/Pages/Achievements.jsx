import React from 'react'
import Header from '../Components/Header'

const Achievements = () => {
  return (
    <div>
      <Header/>
      <div>
        <button>back</button>
        <h2>Achivements</h2>
        <p>Your brain training milestones</p>
      </div>
      <div>
        <p>0/6 <br /> Achievement Unlocked</p>
        <input type="range">Completion Progress</input>
      </div>
    </div>
  )
}

export default Achievements
