import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div>
            <div >
                <img  className="logo" src="src/assets/brainimg.png" alt="" />
            </div>
            <div>
                <h2>Welcome back</h2>
            
                <p>Sign in to continue your brain training journey</p>
            </div>
            <div>
                <label for="email">Email Address</label>
                <br />
                <input type="email" id="email" name="email"/>
            </div>
            <div>
                <label for="pwd">Password</label>
                <br />
                <input type="password" id="pwd" name="pwd"/>
                <br />
            </div>
            <br />
            <div>
                <input type="button" value="Sign In" onclick="msg()"></input>
            </div>
            <div>
                <p>Don,t have any account? <span>Create one for free</span></p> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
