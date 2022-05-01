import React, { useState } from "react";
import MovieList from "./MovieList";
import movies from "../Movie/assets/movieImage";

console.log(movies);
export default function Movies() {
  return (
    <div className="row">
      <h2 className="Moviex">MOVIEX</h2>
      <div className="row__posters">
        <ul>
          {movies.map((movie) => (
            <MovieList
              id={movie.movieId}
              key={movie.movieId}
              image={movie.image}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
