import React from "react";
import { Outlet } from "react-router-dom";
import images from "../images";
import Books from "../routeComponents/Book/Books";
import "./PageBook.css";

console.log(images[0].imageId);

export default function PageBook() {
  return (
    <div className="containerBook">
      <Outlet />
      <div className="content">
        {images.map((book) => (
          <Books image={book.image} id={book.imageId} key={book.imageId} />
        ))}
      </div>
    </div>
  );
}
