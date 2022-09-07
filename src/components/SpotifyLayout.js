import React from 'react'
import SideBar from './SideBar'
import {Outlet} from 'react-router-dom';
import NavBar from './NavBar';

function SpotifyLayout() {
  return (
    <div className='spotify-layout' >
        <SideBar />
        <div className="content-container">
            <NavBar />
            <Outlet />
        </div>
    </div>
  )
}

export default SpotifyLayout