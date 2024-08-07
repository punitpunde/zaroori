import React from 'react'
import Strip from '../extra/Strip'
import { useParams } from 'react-router-dom'
function ArtistInfo(pr) {
const {artist}  = useParams()
  return (
    <>
        <Strip heading={`${artist} mp3 songs download`}></Strip>
        <div className='bg-white row p-1 align-items-center mb-2'>
            <p>Best of {artist} Songs Download PagalWorld. A to Z All Top Hits Mp3 Songs Download PagalWorld, Top {artist} Latest Old Evergreen Mega Hit Songs List in 128kbps, 192kKbps & 320kbps Music Audio Soundtrack.</p>
        </div>
    </>
  )
}

export default ArtistInfo