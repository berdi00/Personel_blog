import React from "react";
import { Link } from "react-router-dom";
import movie from "../images/movie.jpg";

export default function Movie() {
  return (
    <Link to="/movies" className="container container__img4">
      <img className="image image4" src={movie} alt="" />
      <p className="container__img__info">Movies</p>
    </Link>
  );
}
