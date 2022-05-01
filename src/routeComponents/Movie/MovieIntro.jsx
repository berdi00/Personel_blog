import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import movies from "./assets/movieImage";
import "./MovieIntro.css";
import Modal from "../../components/UI/Modal";
import MoviePlayer from "./MoviePlayer";

function getMovie(movieId) {
  const matchedMovie = movies.find((movie) => movieId === movie.movieId);
  return matchedMovie;
}
export default function MovieIntro() {
  const [openModal, setOpenModal] = useState(false);

  const params = useParams();
  const movie = getMovie(params.movieId);

  const modalHandler = () => {
    setOpenModal(true);
  };
  return (
    <Fragment>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)} classname="video">
          <MoviePlayer video={movie.video} />
        </Modal>
      )}
      <div
        className="movieContainer"
        style={{
          backgroundImage: `url(${movie.image2}
         )`,
        }}
      >
        <div className="movie__contents">
          <h1 className="movie__title">{movie.title}</h1>
          <div className="movie__buttons">
            <button className="movie__button" onClick={modalHandler}>
              Play
            </button>
          </div>
          <div className="movie__description">{movie.description}</div>
        </div>
        <div className="movie--fadeBottom"></div>
      </div>
    </Fragment>
  );
}
