import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import MovieContent from "../components/movie/MoviePoster";
import MovieSong from "../components/movie/MovieSong";
import MoreSongs from "../components/movie/MoreSongs";
import Strip from "../components/extra/Strip";

function Movie() {
  console.log("I am hare");
  
  const {movieName } = useParams();
  const { moviesData } = useSelector((state) => {
    return state.moviesState;
  });
  const movie = moviesData.find((movie) => movie.movieName == movieName);
  return (
    <div className="container">
      <div className="row">
        <Outlet/>
        <Strip heading={`${movie.movieName} movie all songs download`}></Strip>
        <MoreSongs songs={movie.songs} />
      </div>
    </div>
  );
}

export default Movie;
