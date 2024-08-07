import React from 'react'
import "./artist.css"
import { useSelector } from 'react-redux'
import Artist from './Artist';
import { Outlet } from 'react-router-dom';
function ArtistList() {
    const {artistsData} = useSelector((state)=>state.artistsState);
  return (
   
        <div className="row py-3 bg-white">
          <Outlet></Outlet>
            {artistsData.map((artist)=><Artist name = {artist.name}/>)}
        </div>

  )
}

export default ArtistList