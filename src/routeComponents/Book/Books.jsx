import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Books.css";

export default function Books(props) {
  return (
    <Fragment>
      <Link to={`/books/${props.id}`} className="book">
        <span className="border-left"></span>
        <img className="imageBook" src={props.image} alt="" />
      </Link>
    </Fragment>
  );
}
