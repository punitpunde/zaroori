import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Strip from '../extra/Strip';
function ArtistContent() {
  const { artist,song } = useParams();
  console.log(artist);
  const { artistsData } = useSelector((state) => state.artistsState);
 
  
  const artistInfo = artistsData.find(
    (artistData) => artistData.name === artist
  );
  const songInfo = artistInfo.songs.find((songData)=>songData.song === song)
  return (
    <>
       <Strip heading={`${song} download mp3`}></Strip>
    <div className="row bg-white text-center mb-2 justify-content-center justify-content-md-start content-container">
      
      <div className="col-md-4 col-10 mt-3 ">
        <img className="w-100 rounded" src={songInfo.songImgPath} alt="" />
      </div>
      <div className="col-md-8 col-12  mt-3">
        <h3 className="text-md-start text-center fw-bold mb-3">
          {songInfo.song}
        </h3>
        <div className="row d-md-block justify-content-center">
        
          <table className="d-block content-table">
            <tbody>
            <tr className="d-inline-block w-100   mb-2">
              <td className="pe-5 text-secondary">Movie Name</td>
              <td className="fw-bold">{songInfo.movieName}</td>
            </tr>

            <tr className="d-inline-block w-100  mb-2">
              <td className="pe-5 text-secondary">Movie Name</td>
              <td>{songInfo.singers}</td>
            </tr>

            <tr className="d-inline-block w-100  mb-4">
              <td className="pe-5 text-secondary">Movie Name</td>
              <td>{songInfo.movieName}</td>
            </tr>
            </tbody>
          </table>

          <div className="col-12">
            <audio controls>
              <source src={songInfo.songPath} type="audio/mpeg" />
            </audio>
            <p className="text-muted">Listen Tujhe Kitna Chahein Audio</p>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default ArtistContent