import React from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import MovieSong from "./components/movie/MovieSong";
import MoviePoster from "./components/movie/MoviePoster";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import ArtistInfo from "./components/artist/ArtistInfo";
import ArtistContent from "./components/artist/ArtistContent";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieName/" element={<Movie />}>
          <Route path=":song" element={<MovieSong />}/>
          <Route index element={<MoviePoster />}/>
        </Route>
        <Route path="/artists" element={<Artists />}/>
     
        <Route path="/artists/:artist" element={<Artist />}>
        <Route index element={<ArtistInfo/>}/>
        <Route path=":song"  element={<ArtistContent/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
