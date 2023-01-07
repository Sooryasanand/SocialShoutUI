import React from 'react'
import "./feed.css"
import Post from '../cards/posts/posts'
import UploadPost from '../cards/uploadpost/UploadPost'
import {Posts} from "../../assets/dummyData"

export default function feed() {
  return (
    <div className='feed'>
      <UploadPost />
      {Posts.map((p)=>(
        <Post key={p.id} post={p} />
      ))}
    </div>
  )
}
