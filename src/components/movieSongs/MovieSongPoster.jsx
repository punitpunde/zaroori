import React from 'react'
import { useParams } from 'react-router-dom'
function MovieSongPoster() {
 const {movieName,song} = useParams();
  return (
    <div>MovieSongPoster</div>
  )
}

export default MovieSongPoster