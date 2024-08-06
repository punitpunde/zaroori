import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function MoreSong(props) {
  return (
    <div className='col-12 more-song'>
        <Link to={props.songInfo.song}>
        <i className="bi bi-music-note-list text-danger fs-2 me-2 mt-2 d-inline-block"></i>
        <h5 className='d-inline-block'>{props.songInfo.song}</h5>
        <br />
        <span className='ms-4 text-muted'>{props.songInfo.singers}</span>
        <hr className='w-100 m-1'/>
        </Link>
    </div>
  )
}

export default MoreSong