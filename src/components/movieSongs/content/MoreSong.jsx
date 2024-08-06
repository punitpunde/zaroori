import React from 'react'

function MoreSong(props) {
  return (
    <div>
        <div className="col-md-4"><img src={props.songInfo.songImgPath} alt="" /></div>
        <div className="col-md-8">
            <h5>{props.song}</h5>
        </div>
    </div>
  )
}

export default MoreSong