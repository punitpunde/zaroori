import React from 'react'
import {useParams} from "react-router-dom"
import Strip from "../extra/Strip"
function MoviePoster() {
    const {movieName} = useParams()
  return (
    <div className='container'>
        <Strip heading = {movieName + " mp3 songs download"}/>
        <MainContent></MainContent>
    </div>
  )
}

export default MoviePoster