import React from "react";
import { Link } from "react-router-dom";

export default function MovieList(props) {
  return (
    <Link to={`/movies/${props.id}`}>
      <img src={props.image} className="row__poster row__posterLarge" />
    </Link>
  );
}
