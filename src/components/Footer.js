import React from "react";
import song_2 from "../assets/song-3.webp";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="song-details">
        <img src={song_2} alt="" />
        <div>
          <h6>Song Title Here</h6>
          <Link to="/albums">Album Name</Link>
        </div>
        <span class="material-icons-outlined">favorite_border</span>
        <span class="material-icons-outlined">call_to_action</span>
      </div>
      <div className="song-controls">
        <div className="audio-controls">
          <span class="material-icons-outlined icon loop">shuffle</span>
          <span class="material-icons icon next">skip_previous</span>
          <span class="material-icons icon circle">play_circle</span>
          <span class="material-icons icon next">skip_next</span>
          <span class="material-icons icon loop">repeat</span>
        </div>
        <div className="song-timer"></div>
      </div>
      <div className="volume-controls">
        <span class="material-icons-outlined">keyboard_voice</span>
        <span class="material-icons-outlined">queue_music</span>
        <span class="material-icons-outlined">volume_up</span>
        <div className="volume-line">
          <div className="active-volume-line"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
