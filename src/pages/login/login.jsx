import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
      <div className="info">
        <img className="logo" src={require("../../assets/logo.png")} alt="logo"/>
        <h3>Log in to SocialShout</h3>
      </div>
      <div className="input">
        <input type="text" className="inputField" placeholder="Email" />
        <input type="password" className="inputField" placeholder="Password" />
      </div>
      <div className="other">
        <button className='loginButton'><div>Log in</div></button>
        <div className='otherButtons'>
            <button className='forgottenButton'><p>Forgotten Password?</p></button>
            <p>.</p>
            <button className='forgottenButton'><p>Sign up for Socialshout</p></button>
        </div>
      </div>
    </div>
  )
}
