import React from 'react'

function MovieContent(props) {
    const { movieInfo } = props;
    return (
      <div className="row bg-white text-center justify-content-center justify-content-md-start content-container">
        <div className="col-md-4 col-10 mt-3 ">
          <img className="w-100 rounded" src={movieInfo.poster} alt="" />
        </div>
        <div className="col-md-8 col-12  mt-3">
          <h3 className="text-md-start text-center fw-bold mb-3">
            {movieInfo.movieName}
          </h3>
          <div className="row d-md-block justify-content-center">
          
            <table className="d-block content-table">
              <tr className="d-inline-block w-100   mb-2">
                <td className="pe-5 text-secondary">Realse Date</td>
                <td className="fw-bold">{movieInfo.year}</td>
              </tr>
  
              <tr className="d-inline-block w-100  mb-2">
                <td className="pe-5 text-secondary">Director Name</td>
                <td>{movieInfo.directorName}</td>
              </tr>
  
              <tr className="d-inline-block w-100  mb-4">
                <td className="pe-5 text-secondary">Start Cast</td>
                <td>{movieInfo.starCast}</td>
              </tr>
            </table>
  
            {/* <div className="col-12">
              <audio controls>
                <source src={movieInfo.songPath} type="audio/mpeg" />
              </audio>
              <p className="text-muted">Listen Tujhe Kitna Chahein Audio</p>
            </div> */}
          </div>
        </div>
      </div>
    );
}

export default MovieContent