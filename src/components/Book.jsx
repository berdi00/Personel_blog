import React from "react";
import book from "../images/book.jpg";

export default function Book() {
  return (
    <div className="container container__img2">
      <img className="image image2" src={book} alt="" />
      <p className="container__img__info">Books</p>
    </div>
  );
}
