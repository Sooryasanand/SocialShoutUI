import React from 'react'
import "./profile.css"
import Divider from "@material-ui/core/Divider";

export default function profile() {
  return (
    <div className='profile'>
      <div className="pic">
        <img src="https://timelinecovers.pro/facebook-cover/download/aesthetic-mong-kok-hong-kong-street-facebook-cover.jpg" alt='cover' className='coverPicture'/>
        <span className='profilePicSpan'><img className="profilePicCard" src={require("../../../assets/profilePIC.jpg")} alt="profile pic"/></span>
      </div>
      <div className="about">
        <h3 className='name'>Soorya Sanand</h3>
        <h5 className='userName'>@sooryasanand</h5>
        <p className="desc">It's me soorya, okay this is a very long description I would say, not its not</p>
        <Divider />
        <div className="followersAndFollowing">
            <div className="followers">
                <h2>6,449</h2>
                <p>Followers</p>
            </div>
            <h1 className='dividerProfile'>|</h1>
            <div className="following">
                <h2>5,492</h2>
                <p>Following</p>
            </div>
        </div>
        <Divider />
        <div className='profileButtonSection'>
            <button className='profileButton'><h4 className='profileButtonText'>My Profile</h4></button>
        </div>
      </div>
    </div>
  )
}
