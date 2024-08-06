import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import MovieContent from './MovieContent';
import Strip from '../extra/Strip';
function MoviePoster() {
  const {movieName} = useParams()
  const { moviesData } = useSelector((state) => {
    return state.moviesState;
  });
  const movie = moviesData.find((movie) => movie.movieName == movieName);
  return (
    <div className="container">
      <Strip heading={movie.movieName+" download mp4"}></Strip>
      <MovieContent movieInfo = {movie}/>
    </div>
  )
}

export default MoviePoster