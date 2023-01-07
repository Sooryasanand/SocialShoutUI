import React from 'react'
import "./UploadPost.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import UploadIcon from '@mui/icons-material/Upload';

export default function UploadPost() {
  return (
    <div className='uploadPost'>
      <div className='top'>
        <img className="profilePicShare" src={require("../../../assets/profilePIC.jpg")} alt="profile pic"/>
        <input className='shareInput' placeholder="What's happening?"></input>
      </div>
      <div className='shareButtons'>
        <div>
            <button className='shareButton'>
            <div className='shareButtonInside'>
                <InsertPhotoIcon className='shareButtonIcon'/>
                <h3 className='shareButtonText'>Photo</h3>
            </div>
            </button>
            <button className='shareButtonOther'>
            <div className='shareButtonInside'>
                <PlayCircleIcon className='shareButtonIcon'/>
                <h3 className='shareButtonText'>Video</h3>
            </div>
            </button>
        </div>
        <button className='shareButtonPost'>
            <div className='shareButtonInside'>
                <UploadIcon className='shareButtonIcon'/>
                <h3 className='shareButtonText'>Post</h3>
            </div>
        </button>
      </div>
    </div>
  )
}
