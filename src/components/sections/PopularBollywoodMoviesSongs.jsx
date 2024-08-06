import React from 'react'
import SectionSongs from '../home/section/SectionSongs';
import { forEach } from 'lodash';

function PopularBollywoodMoviesSongs(props) {

  let allSongs=[];
  props.movies.forEach((movie)=>{
    let songs=[...movie.songs];
     songs.forEach((song)=>allSongs.push(song))
  });


  return (
    <SectionSongs sectionSongsInfo={allSongs}/>
  )
}

export default PopularBollywoodMoviesSongs