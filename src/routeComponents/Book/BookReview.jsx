import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import images from "../../images";
import "./BookReview.css";
import Modal from "../../components/UI/Modal";

function getBook(bookId) {
  const matchedBook = images.find((b) => b.imageId === bookId);
  return matchedBook;
}

export default function BookReview() {
  let params = useParams();
  const [detail, setDetail] = useState(false);
  console.log("need to be clicked first");

  const closeModalHandler = () => {
    setDetail(false);
  };

  useEffect(() => {
    setDetail(true);
    console.log("need to be clicked last");
  }, [params]);
  const match = getBook(params.bookId);

  return (
    <Fragment>
      {detail && (
        <Modal onClose={closeModalHandler}>
          <span>{match.review}</span>
          <button onClick={closeModalHandler} className="bookCloseBtn">
            Close
          </button>
        </Modal>
      )}
    </Fragment>
  );
}
