import React from 'react'
import "./topbar.css"
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function topbar() {
  return (
    <div className='topBar'>
        <div className='rightSide'>
        <img className="logo" src={require("../../assets/logo.png")} alt="logo"/>
           <div className='searchBar'>
                <input type="text" placeholder="# Explore" className="searchInput" />
           </div>
        </div>
        <div className="leftSide">
            <div className="menu">
                <div className="navigationSelected">
                    <HomeIcon className='iconSelected'/>
                    <p>Home</p>
                </div>
                <div className="navigation">
                    <MailIcon className='icons' style={{ fontSize: 30 }} />
                    <span className='topBarIconBadge'>1</span>
                </div>
                <div className="navigation">
                    <NotificationsIcon className='icons' style={{ fontSize: 30 }}/>
                    <span className='topBarIconBadge'>3</span>
                </div>
            </div>
            <div className="user">
                <h1 className='divider'>|</h1>
                <div className="profileTopBar">
                    <img className="profilePicTopBar" src={require("../../assets/profilePIC.jpg")} alt="profile pic"/>
                    <h3>Soorya Sanand</h3>
                    <ArrowDropDownIcon />
                </div>
            </div>
        </div>
    </div>
  )
}
