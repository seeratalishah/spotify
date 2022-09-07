import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <span class="material-icons-outlined icon">arrow_back_ios</span>
        <span class="material-icons-outlined icon">arrow_forward_ios</span>
      </div>
      <div className="navbar-menu">
        <button>Upgrade</button>
        <div className="user">
          <span class="material-icons-outlined user-icon">account_circle</span>
          <select name="" id="">
            <option value="">Edit Profile</option>
            <option value="">Logout</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
