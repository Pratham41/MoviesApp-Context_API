import React, { Component, createContext } from "react";

export const moviesProvider = createContext();

class Moviescontext extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      addMovie: this.addMovie,
    };
  }

  addMovie = (movie) => {
    this.setState({ movies: [...this.state.movies, movie] });
  };

  render() {
    return (
      <moviesProvider.Provider value={{ ...this.state }}>
        {this.props.children}
      </moviesProvider.Provider>
    );
  }
}

export default Moviescontext;
