import React from 'react'
import MoreSong from './MoreSong'
function MoreSongs(props) {
  return (
    <div>
        {props.songs.map((song)=><MoreSong songInfo = {song}/>)}
    </div>
  )
}

export default MoreSongs