import React from "react";
import "./movie.css";
import SongContent from "./SongContent";
import DownloadButtons from "./DownloadButtons";
function MovieSongContent(props) {
  const { songInfo } = props;
  return (
    <>
      <SongContent songInfo={songInfo} />
      <DownloadButtons></DownloadButtons>
    </>
  );
}

export default MovieSongContent;
