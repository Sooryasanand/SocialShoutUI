import React from 'react'
import "./home.css"
import TopBar from '../../components/topbar/topbar'
import LeftSide from '../../components/leftside/leftside'
import Feed from '../../components/feed/feed'
import RightSide from '../../components/rightside/rightside'

export default function home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <LeftSide />
        <Feed />
        <RightSide />
      </div>
    </>
  )
}
