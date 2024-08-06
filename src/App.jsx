import React from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import MovieSong from "./components/movie/MovieSong";
import MoviePoster from "./components/movie/MoviePoster";
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
      </Routes>
    </div>
  );
}

export default App;
