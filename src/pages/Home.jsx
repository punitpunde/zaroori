import React from 'react'
import Description from '../components/home/Description'
import PopularBollywoodMoviesSongs from '../components/sections/PopularBollywoodMoviesSongs';
import Strip from "../components/extra/Strip"
import { useSelector } from 'react-redux'

function Home() {
  const {moviesData} = useSelector((state)=>{
    return state.moviesState;
  });
 const movies = moviesData.map((data)=>data);
 
  return (
    <div className='container home-container'>
      <Description/>

      <Strip heading={"Popular Bollywood movies songs"}/>
      <PopularBollywoodMoviesSongs movies={movies}/>


    </div>
  )
}

export default Home