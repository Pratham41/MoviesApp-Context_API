import React, { useContext } from "react";
import { moviesProvider } from "./Moviescontext";

function Navbar() {
  const obj = useContext(moviesProvider);
  return (
    <div style={{ backgroundColor: "teal" }}>
      <h1>Total movies count is : {obj.movies.length} </h1>
    </div>
  );
}

export default Navbar;
