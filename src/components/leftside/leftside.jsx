import React from 'react'
import "./leftside.css"
import Profile from "../../components/cards/profile/profile";
import People from "../../components/cards/people/people";

export default function leftside() {
  return (
    <div className='leftside'>
      <Profile />
      <People />
    </div>
  )
}
