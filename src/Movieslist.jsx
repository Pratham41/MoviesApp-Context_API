import React, { useContext } from "react";
import { moviesProvider } from "./Moviescontext";

function Movieslist() {
  const obj = useContext(moviesProvider);

  const movieslist = obj.movies.map((movie) => {
    return (
      <div>
        <h1>Movie name : {movie.moviename}</h1>
        <p>Directed by : {movie.director}</p>
      </div>
    );
  });
  return (
    <div>
      <h1 style={{ backgroundColor: "green" }}>movieslist</h1>
      {movieslist}
    </div>
  );
}

export default Movieslist;
