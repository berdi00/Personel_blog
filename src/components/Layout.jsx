import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import Movie from "./Movie";
import Music from "./Music";
import Book from "./Book";
import Personality from "./Personality";
import EmptyBox from "./EmptyBox";

export default function Layout(props) {
  return (
    <div className="layout">
      <Personality />
      <Link to="/books">
        <Book />
      </Link>
      <Music />
      <Movie />
      <EmptyBox />
    </div>
  );
}
