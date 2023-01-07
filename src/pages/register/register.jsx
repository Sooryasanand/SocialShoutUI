import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className='login'>
      <div className="info">
        <img className="logo" src={require("../../assets/logo.png")} alt="logo"/>
        <h3>Register to SocialShout</h3>
      </div>
      <div className="input">
        <input type="text" className="inputField" placeholder="Username" />
        <input type="text" className="inputField" placeholder="Email" />
        <input type="password" className="inputField" placeholder="Password" />
        <input type="password" className="inputField" placeholder="Password" />
      </div>
      <div className="other">
        <button className='loginButton'><div>Register in</div></button>
        <div className='otherButtons'>
            <button className='forgottenButton'><p>Log in to Socialshout</p></button>
        </div>
      </div>
    </div>
  )
}
