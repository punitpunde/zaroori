import React from "react";
import "./movie.css";
import SongContent from "./SongContent";
import DownloadButtons from "./DownloadButtons";
import ShortDescription from "./ShortDescription";
function MovieSongContent(props) {
  const { songInfo } = props;
  return (
    <>
      <SongContent songInfo={songInfo} />
      <DownloadButtons></DownloadButtons>
      <ShortDescription description={props.description}></ShortDescription>
    </>
  );
}

export default MovieSongContent;
