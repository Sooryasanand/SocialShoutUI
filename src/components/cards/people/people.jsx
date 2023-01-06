import React from 'react'
import "./people.css"

function Profiles() {
  return (
    <div className="profiles">
      <div className="leftSide">
      <img className="profilePicPeople" src="https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg="alt="profile pic"/>
        <div className="aboutName">
          <h5>Jane Philip</h5>
          <p>@JanePhilip</p>
        </div>
      </div>
      <button className='followButton'>Follow</button>
    </div>
  )
}

export default function people() {
  return (
    <div className='people'>
      <h3 className='title'>Suggested People</h3>
      <Profiles />
    </div>
  )
}
