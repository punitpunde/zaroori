import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Strip from "../components/extra/Strip";
import MoreSongs from "../components/common/MoreSongs";
function Artist() {
  
    
  const { artist } = useParams();
  const { artistsData } = useSelector((state) => state.artistsState);
  const artistInfo = artistsData.find(
    (artistData) => artistData.name === artist
  );
  
  
  return (
    <div className="container">
      <Outlet></Outlet>
      <Strip heading={`${artist} Best Songs to download`}></Strip>
      <div className="row"><MoreSongs songs={artistInfo.songs}></MoreSongs></div>
    </div>
  );
}

export default Artist;
