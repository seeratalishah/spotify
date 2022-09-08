import React from "react";
import Card from "./Card";
import SongCard from "./SongCard";
import song_1 from "../assets/song-1.webp";
import song_2 from "../assets/song-2.webp";
import song_3 from "../assets/song-3.webp";
import song_4 from "../assets/song-4.jfif";
import song_5 from "../assets/song-5.jfif";
import song_6 from "../assets/song-6.jpg";

function Home() {
  const cards = [
    {
      imgUrl: song_1,
      title: "My Playlist",
    },
    {
      imgUrl: song_2,
      title: "My Playlist",
    },
    {
      imgUrl: song_3,
      title: "My Playlist",
    },
    {
      imgUrl: song_4,
      title: "My Playlist",
    },
    {
      imgUrl: song_5,
      title: "My Playlist",
    },
    {
      imgUrl: song_6,
      title: "My Playlist",
    },
  ];

  const songCards = [
    {
      imgUrl: song_1,
      title: "My Playlist",
      singersList: ["Alka", "Atif Aslam", "Jubin", "Seerat Ali"],
    },
    {
      imgUrl: song_2,
      title: "My Playlist",
      singersList: ["Alka", "Atif Aslam", "Jubin", "Tahira"],
    },
    {
      imgUrl: song_3,
      title: "My Playlist",
      singersList: ["Alka", "Atif Aslam", "Jubin", "Kainat Ali"],
    },
    {
      imgUrl: song_4,
      title: "My Playlist",
      singersList: ["Atif Aslam", "Rizwan Malid", "Ansar Ali Akash"],
    },
    {
      imgUrl: song_5,
      title: "My Playlist",
      singersList: ["Alka", "Atif Aslam", "Jubin", "Jugnu", "Sonu Kumar"],
    },
    {
      imgUrl: song_6,
      title: "My Playlist",
      singersList: ["Alka", "Atif Aslam", "Jubin", "Lata Ji"],
    },
  ];
  return (
    <div className="home">
      <h2>Good Morning</h2>
      <div className="playlist-cards">
        {cards.map((card, index) => {
          return <Card key={index} imgUrl={card.imgUrl} title={card.title} />;
        })}
      </div>

      <h2>Your Top Mixes</h2>

      <div className="song-cards">
        {songCards.map((card, index) => {
          return (
            <SongCard
              key={index}
              imgUrl={card.imgUrl}
              title={card.title}
              singersList={card.singersList}
            />
          );
        })}
      </div>

      <h2>Recommended For Today</h2>

      <div className="song-cards">
        {songCards.map((card, index) => {
          return (
            <SongCard
              key={index}
              imgUrl={card.imgUrl}
              title={card.title}
              singersList={card.singersList}
            />
          );
        })}
      </div>

      <hr />
    </div>
  );
}

export default Home;
