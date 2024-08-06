import React from 'react'
import MoreSong from './MoreSong'
import { v4 as uuid } from 'uuid';
function MoreSongs(props) {
  console.log("here");
  
  return (
    <div className='row bg-white m-0'>
        {props.songs.map((songInfo)=><MoreSong key = {uuid()} songInfo = {songInfo}/>)}
    </div>
  )
}

export default MoreSongs;