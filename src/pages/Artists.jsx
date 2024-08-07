import React from "react";
import Strip from "../components/extra/Strip";
import ArtistList from "../components/artist/ArtistList";

function Artists() {
  return (
    <div className="container">
      <Strip heading={"Browse Songs by Artist PagalWorld"}></Strip>
      <div className="mb-1 bg-white row">
        <p className="fs-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          hic facilis suscipit recusandae quasi animi. Quasi laudantium
          asperiores inventore voluptate! Fuga odit exercitationem sunt esse,
          reiciendis eos accusamus iste perferendis?
        </p>
      </div>
      <Strip heading={"A to Z Singers List"}></Strip>
      <ArtistList />
    </div>
  );
}

export default Artists;
