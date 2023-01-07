import React from 'react'

export default function friends({user}) {
  return (
    <div className="profiles">
      <div className="leftSide">
        <img className="profilePicPeople" src="https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg="alt="profile pic"/>
        <div className="aboutName">
          <h5>{user.username}</h5>
          <p>@{user.username}</p>
        </div>
      </div>
      <button className='followButton'>Follow</button>
    </div>
  )
}
