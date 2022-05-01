import React from "react";
import { Link } from "react-router-dom";
import music from "../images/music.jpg";

export default function Music() {
  return (
    <Link to="music" className="container container__img3">
      <img className="image image3" src={music} alt="" />
      <p className="container__img__info">Music</p>
    </Link>
  );
}
