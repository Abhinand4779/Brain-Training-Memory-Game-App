import React from 'react'
import Header from '../Components/Header'

const Settings = () => {
  return (
    <div>
      <Header/>
      <div>
        <button>Back</button>
        <h2>Statitics</h2>
        <p>Detailed performance metrics</p>
      </div>
      <div>
        <img src="src/assets/brainimg.png" alt="" />
        <h6>Profile</h6><br />
        <p>Manage your account information</p>
      </div>
    </div>
  )
}

export default Settings
