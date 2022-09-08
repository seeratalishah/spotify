import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function SpotifyLayout() {
  return (
    <>
      <div className="spotify-layout">
        <SideBar />
        <div className="content-container">
          <NavBar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SpotifyLayout;
