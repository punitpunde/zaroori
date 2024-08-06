import React from 'react'
import SectionSong from './SectionSong'
import { v4 as uuid } from "uuid";
function SectionSongs(props) {
  // console.log(props.sectionSongsInfo);
  
  return (
    <div className='row'>
        {props.sectionSongsInfo.map((songInfo)=><SectionSong key = {uuid()} songInfo = {songInfo} />)}
    </div>
  )
}

export default SectionSongs