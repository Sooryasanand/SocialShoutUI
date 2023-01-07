import React from 'react'
import "./people.css"
import {Users} from "../../../assets/dummyData"
import Profiles from '../profiles/profiles'

export default function people() {
  return (
    <div className='people'>
      <h3 className='title'>Suggested People</h3> 
      {Users.map((u) => (
        <Profiles key={u.id} user={u} />
      ))}
    </div>
  )
}