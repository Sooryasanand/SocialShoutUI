import React from 'react';
import "./profile.css";
import Divider from "@material-ui/core/Divider";
import Post from '../../components/cards/posts/posts'
import Friends from "../../components/cards/friends/friends"
import TopBar from '../../components/topbar/topbar'
import UploadPost from "../../components/cards/uploadpost/UploadPost"
import {Posts} from "../../assets/dummyData"
import {Users} from "../../assets/dummyData"

export default function Profile() {

  return (
    <div>
      <TopBar/>
      <div className='profilePage'>
        <div className="pic">
          <img src="https://timelinecovers.pro/facebook-cover/download/aesthetic-mong-kok-hong-kong-street-facebook-cover.jpg" alt='cover' className='coverPicture'/>
          <span className='profilePicSpan'><img className="profilePicCard" src={require("../../assets/profilePIC.jpg")} alt="profile pic"/></span>
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
        </div>
      </div>
      <div className='postsAndFriends'>
        <div className='postUploadProfile'>
          <UploadPost />
          <div >
          {Posts.map((p)=>(
            <Post key={p.id} post={p} />
          ))}
          </div>
        </div>
        <div className='friends'>
          <h3 className='title'>Suggested People</h3>
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </div>
      </div>
    </div>
    
  )
}
