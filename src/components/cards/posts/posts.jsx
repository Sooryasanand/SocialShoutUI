import React from 'react'
import "./posts.css"
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import IosShareIcon from '@mui/icons-material/IosShare';
import MessageIcon from '@mui/icons-material/Message';
import { Users } from "../../../assets/dummyData"

export default function Posts({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='posts'>
      <div className="user">
        <img className="userProfilePic" src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-11/22/full/1574363408-796.jpg" alt="profile pic"/>
        <div className='aboutUser'>
            <div className='nameUserName'>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <h3 style={{ cursor: "pointer"}}>{Users.filter((u) => u.id===post.userId)[0].username}</h3>
                  <h4 style={{ marginLeft: 10, color: "#6d7c85"}}>○</h4>
                  <p style={{ marginTop: 14, marginLeft: 10, fontSize: 15}}>{post.date}</p>
                </div>
                <p>@{Users.filter((u) => u.id===post.userId)[0].username}</p>
            </div>
            <div>
                <MoreHorizIcon className='moreButton' />
            </div>
        </div>
      </div>
      <div className="content">
        <p>{post.content}</p>
      </div>
      <div>
      </div>
      <div className="likes">
        <div className="left">
          <button className="postLikeButton">
              <img className="postLikeImage" src={require("../../../assets/like_button.png")} alt="Like Button"/>
          </button>
          <button className="postLikeButton">
              <img className="postRepostImage" src={require("../../../assets/repost_button.png")} alt="Like Button"/>
          </button>
          <button className="postLikeButton">
              <img className="postLikeImage" src={require("../../../assets/share_button.png")} alt="Like Button"/>
          </button>
          <p className='likeCounter'>{like} Likes</p>
        </div>
        <p className='postComment'>{post.comment} Comments</p>
      </div>
      <div className="buttons">
        <button className='button' onClick={likeHandler}>
          <div className='buttonInside'>
            
            {isLiked ? <FavoriteIcon className='buttonIconLiked'/> : <FavoriteIcon className='buttonIcon'/>}
            {isLiked ? <h3 className='buttonText'>Liked</h3> : <h3 className='buttonText'>Like</h3>}
          </div>
        </button>
        <button className='buttonOther'>
          <div className='buttonInside'>
            <RepeatIcon className='buttonIcon'/>
            <h3 className='buttonText'>Repost</h3>
          </div>
        </button>
        <button className='buttonOther'>
          <div className='buttonInside'>
            <MessageIcon className='buttonIcon'/>
            <h3 className='buttonText'>Comment</h3>
          </div>
        </button>
        <button className='buttonShare'>
          <div className='buttonInside'>
            <IosShareIcon className='buttonIcon'/>
          </div>
        </button>
      </div>
    </div>
  )
}
