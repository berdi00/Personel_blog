import React from "react";
import ReactPlayer from "react-player";
import "./MoviePlayer.css";

const MoviePlayer = (props) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={`../../videos/${props.video}`}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
      />
    </div>
  );
};

export default MoviePlayer;
