import React from "react";
import Logo from "./Logo";
import { NavLink } from 'react-router-dom';


function SideBar() {
  return (
    <div className="side-bar">
      <Logo />
      <div className="sidebar-items-container">
        <ul className="items-container">

          <li className="item">
            <NavLink>
             <span class="material-icons-outlined">home</span>
             <span className="text" >home</span>
            </NavLink>
             
          </li>
          <li className="item">
            <NavLink>
            <span class="material-icons-outlined">search</span>
            <span className="text">Search</span>
            </NavLink>
           
          </li>
          <li className="item">
            <NavLink>                                   +
            <span class="material-icons-outlined">bookmarks</span>
            <span className="text">home</span>
            </NavLink>
            
          </li>
        </ul>

        <div className="items-container icon">
          <div className="item">
            <div className="div">
             <span class="material-icons-outlined">add</span>
            </div>
            <span className="text">home</span>
          </div>
          <div className="item">
            <div className="div" >
             <span class="material-icons-outlined">favorite</span>
            </div>
            
            <span className="text">Search</span>
          </div>
          
        </div>
      </div>

      <hr />

      <div className="album-list">
        <ul>
            <li>Morning Songs</li>
            <li>Traveling Songs</li>
        </ul>
      </div>


    </div>
  );
}

export default SideBar;
