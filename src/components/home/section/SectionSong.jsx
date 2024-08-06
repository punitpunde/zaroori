import React from "react";
import "./section.css";
import { useNavigate } from "react-router-dom";

function SectionSong(props) {
  const songInfo = props.songInfo;
  const nav = useNavigate();
  const handleClick = ()=>{
    nav(`/${songInfo.movieName}/${songInfo.song}`)
  }

  return (
    <div className="col-md-6  col-12 section-song-container d-flex mt-2 p-2 " onClick={handleClick}>
      <img src={songInfo.songImgPath} alt="poster-img" />
      <div className="p-2 m-0">
        <strong>{songInfo.song}</strong>
        <br />
        <span className="fs-6 text-muted">{songInfo.movieName}</span>
        <br />
        <span className="fs-6 text-muted">{songInfo.singers}</span>
      </div>
    </div>
  );
}

export default SectionSong;
