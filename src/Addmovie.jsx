import React, { useContext, useState } from "react";
import { moviesProvider } from "./Moviescontext";

function Addmovie() {
  const [moviename, setMoviename] = useState("");
  const [director, setDirector] = useState("");
  const obj = useContext(moviesProvider);

  function add() {
    var movie = {
      moviename: moviename,
      director: director,
    };

    obj.addMovie(movie);
  }

  return (
    <div>
      <h1>Add Movie</h1>
      <input
        type="text"
        placeholder="name"
        value={moviename}
        onChange={(e) => {
          setMoviename(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="director"
        value={director}
        onChange={(e) => {
          setDirector(e.target.value);
        }}
      />
      <br />
      <button onClick={add}>Add</button>
    </div>
  );
}

export default Addmovie;
