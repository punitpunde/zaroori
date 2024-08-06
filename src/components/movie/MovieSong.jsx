import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieSongContent from "./MovieSongContent";
import Strip from "../extra/Strip";

function MovieSong() {
  const {movieName,song} = useParams();
  const { moviesData } = useSelector((state) => {
    return state.moviesState;
  });
  const movie = moviesData.find((movie) => movie.movieName == movieName);
  const songInfo = movie.songs.find((songByMovie) => {
    return songByMovie.song === song;
  });

  return (
    <div className="container">
      <Strip heading={songInfo.song+" download mp3"}></Strip>
      <MovieSongContent songInfo={songInfo}></MovieSongContent>
    </div>
  );
}

export default MovieSong;
