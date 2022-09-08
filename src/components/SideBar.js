import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from './Logo';

function SideBar() {
  const location =useLocation();
  console.log(location);
// location.pathname === /dashboard

  return (
    <aside>
     <Logo className='logo-space' />

     <div className="menus">
     <ul className="sidebar-links">
        <li>
          <NavLink to="/" className={({isActive})=> location.pathname === '/'? 'active' : '' } >
            <span className="material-icons-outlined">home</span>
            <span className="link-text">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/spotifylayout/search">
            <span className="material-icons-outlined">search</span>
            <span className="link-text">Search</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/spotifylayout/library">
            <span className="material-icons-outlined">bookmarks</span>
            <span className="link-text"> Products</span>
          </NavLink>
        </li>
      </ul>

      <ul className="sidebar-links">
        <li>
          <NavLink to="/spotifylayout/playlist">
            <span className="material-icons-outlined">add</span>
            <span className="link-text">Create Playlist</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/spotifylayout/favorite">
            <span className="material-icons-outlined">favorite</span>
            <span className="link-text">Liked Songs</span>
          </NavLink>
        </li>
      </ul>
     </div>

     <hr />

     <ul className="sidebar-links">
        <li>
          <NavLink to="/spotifylayout/playlist-1">
            <span className="link-text">My playlist #1</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/spotifylayout/playlist-2">
            <span className="link-text">My playlist #2</span>
          </NavLink>
        </li>
      </ul>

    
    </aside>
  );
}

export default SideBar;
